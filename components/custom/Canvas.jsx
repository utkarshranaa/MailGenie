"use client"
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider';
import React, { useEffect, useRef, useState } from 'react'
import ColumnLayout from '../LayoutElements/ColumnLayout';
import ViewHtmlDialog from './ViewHtmlDialog';

function Canvas({ viewHTMLCode, closeDialog }) {
    const htmlRef = useRef();
    const { screenSize, setScreenSize } = useScreenSize();
    const { dragElementLayout, setDragElementLayout } = useDragElementLayout();
    const { emailTemplate, setEmailTemplate } = useEmailTemplate();
    const [dragOver, setDragOver] = useState(false);
    const [htmlCode, setHtmlCode] = useState();
    const onDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
        console.log('Over...')
    }
    const onDropHandle = () => {
        setDragOver(false);
        if (dragElementLayout?.dragLayout) {
            setEmailTemplate(prev => [...prev, dragElementLayout?.dragLayout])
        }
    }

    const getLayoutComponent = (layout) => {
        if (layout?.type == 'column') {
            return <ColumnLayout layout={layout} />
        }
    }

    useEffect(() => {
        viewHTMLCode && GetHTMLCode();
    }, [viewHTMLCode])

    const GetHTMLCode = () => {
        if (htmlRef.current) {
            const htmlContent = htmlRef.current.innerHTML;
            console.log(htmlContent);
            setHtmlCode(htmlContent);
        }
    }



    return (
        <div className='mt-10 flex justify-center'>
            <div className={`bg-white p-6 w-full 
                ${screenSize == 'desktop' ? 'max-w-2xl' : 'max-w-md'}
                ${dragOver && 'bg-purple-100 p-4'}
                `}
                onDragOver={onDragOver}
                onDrop={() => onDropHandle()}
                ref={htmlRef}
            >
                {emailTemplate?.length > 0 ? emailTemplate?.map((layout, index) => (
                    <div key={index}>
                        {getLayoutComponent(layout)}
                    </div>
                )) :
                    <h2 className='p-4 text-center bg-gray-100 border border-dashed'>Add Layout Here</h2>
                }

            </div>
            <ViewHtmlDialog openDialog={viewHTMLCode} htmlCode={htmlCode} closeDialog={closeDialog} />
        </div>
    )
}

export default Canvas