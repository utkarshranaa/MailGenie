"use client"
import { useDragElementLayout, useEmailTemplate, useSelectedElement } from '@/app/provider';
import React, { useRef, useState } from 'react'
import ButtonComponent from '../custom/Element/ButtonComponent';
import TextComponent from '../custom/Element/TextComponent';
import ImageComponent from '../custom/Element/ImageComponent';
import LogoComponent from '../custom/Element/LogoComponent';
import DividerComponent from '../custom/Element/DividerComponent';
import SocialIcons from '../custom/Element/SocialIcons';
import LogoHeader from '../custom/Element/LogoHeader';
import { ArrowDown, ArrowUp, Trash } from 'lucide-react';
import { Button } from '../ui/button';

function ColumnLayout({ layout }) {
    const [dragOver, setDragOver] = useState();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
    const { selectedElement, setSelectedElement } = useSelectedElement();
    const onDragOverHandle = (event, index) => {
        event.preventDefault();
        setDragOver({
            index: index,
            columnId: layout?.id
        })
        console.log(dragOver)
    }

    const onDropHandle = () => {
        const index = dragOver.index;
        setEmailTemplate(prevItem =>
            prevItem?.map(col => col.id === layout?.id ?
                { ...col, [index]: dragElementLayout?.dragElement }
                : col)
        )
        console.log(emailTemplate)
        setDragOver(null);
    }

    const GetElementComponent = (element) => {
        if (element?.type == 'Button') {
            return <ButtonComponent {...element} />
        } else if (element?.type == 'Text') {
            return <TextComponent {...element} />
        } else if (element?.type == 'Image') {
            return <ImageComponent {...element} />
        } else if (element?.type == 'Logo') {
            return <LogoComponent {...element} />
        } else if (element?.type == 'Divider') {
            return <DividerComponent {...element} />
        } else if (element?.type == 'SocialIcons') {
            return <SocialIcons {...element} />
        }
        else if (element?.type == 'LogoHeader') {
            return <LogoHeader {...element} />
        }
        return element?.type
    }

    const deleteLayout = (layoutId) => {
        const updateEmailTemplate = emailTemplate?.filter(item => item.id != layoutId);
        setEmailTemplate(updateEmailTemplate);
        setSelectedElement(null);
    }

    const moveItemUp = (layoutId) => {
        const index = emailTemplate.findIndex((item) => item.id === layoutId);
        if (index > 0) {
            setEmailTemplate((prevItems) => {
                const updatedItems = [...prevItems];
                // Swap the current item with the one above it
                [updatedItems[index], updatedItems[index - 1]] = [
                    updatedItems[index - 1],
                    updatedItems[index],
                ];
                return updatedItems;
            });
        }
    };
    const moveItemDown = (layoutId) => {
        const index = emailTemplate.findIndex((item) => item.id === layoutId);
        if (index > 0) {
            setEmailTemplate((prevItems) => {
                const updatedItems = [...prevItems];
                // Swap the current item with the one above it
                [updatedItems[index], updatedItems[index + 1]] = [
                    updatedItems[index + 1],
                    updatedItems[index],
                ];
                return updatedItems;
            });
        }
    };



    return (
        <div className='relative' >

            <div

                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${layout?.numOfCol},1fr)`,
                    gap: '0px'

                }}
                className={`${selectedElement?.layout?.id == layout?.id && 'border border-dashed border-blue-500'}`}
            >
                {Array.from({ length: layout?.numOfCol }).map((_, index) => (
                    <div key={index} className={`
                     flex items-center h-full w-full bg-white cursor-pointer
                     ${(index == dragOver?.index && dragOver?.columnId == layout.id) ? 'bg-green-200' : 'bg-gray-100'}
                     ${!layout?.[index]?.type && 'bg-gray-100 p-5 border border-dashed'}  justify-center
                      ${(selectedElement?.layout?.id == layout?.id && selectedElement?.index == index)
                        && 'border-blue-500 border-4'}`}
                        onDragOver={(event) => onDragOverHandle(event, index)}
                        onDrop={onDropHandle}
                        onClick={() => setSelectedElement({ layout: layout, index: index })}

                    >
                        {GetElementComponent(layout?.[index]) ?? 'Drag Element Here'}

                    </div>
                ))}
                {selectedElement?.layout?.id == layout?.id &&
                    <div className='absolute -right-10 flex gap-2 flex-col'>
                        <div className=' cursor-pointer
                     bg-purple-100 p-2 rounded-full hover:scale-105 
                     transition-all hover:shadow-md' onClick={() => deleteLayout(layout?.id)}>
                            <Trash className='h-4 w-4 text-red-500 ' />
                        </div>
                        <div className='cursor-pointer
                    bg-gray-100 p-2 rounded-full hover:scale-105 
                    transition-all hover:shadow-md' onClick={() => moveItemUp(layout.id)}>
                            <ArrowUp className='h-4 w-4 ' />
                        </div>
                        <div className='cursor-pointer
                    bg-gray-100 p-2 rounded-full hover:scale-105 
                    transition-all hover:shadow-md' onClick={() => moveItemDown(layout.id)}>
                            <ArrowDown className='h-4 w-4 ' />
                        </div>
                    </div>

                }
            </div>

        </div>
    )
}

export default ColumnLayout