"use client"
import { useSelectedElement } from '@/app/provider'
import React, { useContext, useEffect, useState } from 'react'
import InputField from './Settings/InputField';
import ColorPickerField from './Settings/ColorPickerField';
import InputStyleField from './Settings/InputStyleField';
import SliderField from './Settings/SliderField';
import TextAreaField from './Settings/TextAreaField';
import ToogleGroupField from './Settings/ToogleGroupField';
import { AArrowUp, AlignCenter, AlignLeft, AlignRight, CaseLower, CaseUpper } from 'lucide-react';
import DropdownField from './Settings/DropdownField';
import ImagePreview from './Settings/ImagePreview';
import SocialFields from './Settings/SocialFields';

const TextAlignOptions = [
    {
        value: 'left',
        icon: AlignLeft
    },
    {
        value: 'center',
        icon: AlignCenter
    },
    {
        value: 'right',
        icon: AlignRight
    }
]
const TextTransformOptions = [
    {
        value: 'uppercase',
        icon: CaseUpper
    },
    {
        value: 'lowercase',
        icon: CaseLower
    },
    {
        value: 'capitalize',
        icon: AArrowUp
    }
]

function Settings() {
    const { selectedElement, setSelectedElement } = useSelectedElement();
    const [element, setElement] = useState();
    useEffect(() => {
        console.log(JSON.stringify(selectedElement))
        setElement(selectedElement?.layout?.[selectedElement?.index])
    }, [selectedElement])

    const onHandleInputChange = (fieldName, value) => {
        console.log(fieldName, "value" + value);
        //Copy of Current SelectedElement
        const updatedData = { ...selectedElement }
        // Update the specific Field
        updatedData.layout[selectedElement.index][fieldName] = value
        //Update Orginal SelectedElement
        setSelectedElement(updatedData)

    }

    const onHandleStyleChange = (fieldName, fieldValue) => {
        //Copy of Current SelectedElement
        /**
         * selectedElement:{
         * index:0,
         * layout:{
         * ...layout,
         * [0]{
         * style:{
         * ...style
         * }
         * }
         * }
         * }
         */

        let updateElement = {
            ...selectedElement,
            layout: {
                ...selectedElement?.layout,
                [selectedElement?.index]: {
                    ...selectedElement?.layout[selectedElement?.index],
                    style: {
                        ...selectedElement?.layout[selectedElement?.index]?.style,
                        [fieldName]: [fieldValue]
                    }
                }
            }
        }
        setSelectedElement(updateElement)
    }
    const onHandleOuterStyleChange = (fieldName, fieldValue) => {

        let updateElement = {
            ...selectedElement,
            layout: {
                ...selectedElement?.layout,
                [selectedElement?.index]: {
                    ...selectedElement?.layout[selectedElement?.index],
                    outerStyle: {
                        ...selectedElement?.layout[selectedElement?.index]?.outerStyle,
                        [fieldName]: [fieldValue]
                    }
                }
            }
        }
        setSelectedElement(updateElement)
    }

    const FormattedValue = (value) => {
        return value?.replace('px', '');
    }

    return (
        <div className='p-5 flex flex-col gap-3'>
            <h2 className='font-bold text-xl'>Settings</h2>
            {element?.imageUrl &&
                <ImagePreview label={'Image Preview'} value={element?.imageUrl}
                    onHandleInputChange={(value) => onHandleInputChange('imageUrl', value)} />
            }
            {element?.content &&
                <InputField label={'Content'} value={element?.content}
                    onHandleInputChange={(value) => onHandleInputChange('content', value)} />
            }
            {element?.textarea &&
                <TextAreaField label={'Text Area'} value={element?.textarea}
                    onHandleInputChange={(value) => onHandleInputChange('textarea', value)} />
            }
            {element?.url &&
                <InputField label={'url'} value={element?.url}
                    onHandleInputChange={(value) => onHandleInputChange('url', value)} />
            }
            {element?.style?.width &&
                <SliderField label={'Width'}
                    value={element?.style?.width}
                    type="%"
                    onHandleStyleChange={(value) => onHandleStyleChange('width', value)} />
            }
            {element?.style?.height &&
                <SliderField label={'Height'}
                    value={element?.style?.height}
                    type="%"
                    onHandleStyleChange={(value) => onHandleStyleChange('height', value)} />
            }
            {element?.style.textAlign &&
                <ToogleGroupField label={'Text Align'}
                    value={element?.style.textAlign}
                    options={TextAlignOptions}
                    onHandleStyleChange={(value) => onHandleStyleChange('textAlign', value)}
                />
            }
            {element?.style?.backgroundColor &&
                <ColorPickerField label='Background Color'
                    value={element?.style?.backgroundColor}
                    onHandleStyleChange={(value) => onHandleStyleChange('backgroundColor', value)}
                />
            }
            {element?.style?.color &&
                <ColorPickerField label='Text Color'
                    value={element?.style?.color}
                    onHandleStyleChange={(value) => onHandleStyleChange('color', value)}
                />
            }
            {element?.style?.fontSize &&
                <InputStyleField label={'Font Size'}
                    value={element?.style?.fontSize}
                    onHandleStyleChange={(value) => onHandleStyleChange('fontSize', value)} />
            }

            {element?.style.textTransform &&
                <ToogleGroupField label={'Text Transform'}
                    value={element?.style.textTransform}
                    options={TextTransformOptions}
                    onHandleStyleChange={(value) => onHandleStyleChange('textTransform', value)}
                />
            }
            {element?.style?.padding &&
                <InputStyleField label={'Padding'}
                    value={element?.style?.padding}
                    onHandleStyleChange={(value) => onHandleStyleChange('padding', value)} />
            }
            {element?.style?.margin &&
                <InputStyleField label={'Margin'}
                    value={element?.style?.margin}
                    onHandleStyleChange={(value) => onHandleStyleChange('margin', value)} />
            }
            {element?.style?.borderRadius &&
                <SliderField label={'Border Radius'}
                    value={element?.style?.borderRadius}
                    onHandleStyleChange={(value) => onHandleStyleChange('borderRadius', value)} />
            }
            {element?.style?.fontWeight &&
                <DropdownField label={'Font Width'}
                    value={element?.style?.fontWeight}
                    options={['normal', 'bold']}
                    onHandleStyleChange={(value) => onHandleStyleChange('fontWeight', value)} />
            }
            {element?.socialIcons &&
                <SocialFields label='Social Link'
                    value={element?.socialIcons}
                    options={element?.options}
                    onHandleStyleChange={(value) => console.log('socialIcon', value)}
                />
            }
            <div>
                <h2 className='font-bold mb-2'>Outer Style</h2>
                {element?.outerStyle?.backgroundColor &&
                    <ColorPickerField label='Background Color'
                        value={element?.outerStyle?.backgroundColor}
                        onHandleStyleChange={(value) => onHandleOuterStyleChange('backgroundColor', value)}
                    />
                }
                {element?.outerStyle?.justifyContent &&
                    <ToogleGroupField label='Align'
                        value={element?.outerStyle?.justifyContent}
                        options={TextAlignOptions}
                        onHandleStyleChange={(value) => onHandleOuterStyleChange('justifyContent', value)}
                    />
                }

            </div>



        </div>
    )
}

export default Settings