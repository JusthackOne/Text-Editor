import React, { useState } from 'react';
import 'boxicons';

const TextEditor = () => {
    const [fontList, setFontList] = useState([
        "Arial",
        "Verdana",
        "Times New Roman",
        "Garamond",
        "Georgia",
        "Courier New",
        "Cursive",
    ])

    const [content, setContent] = useState('')

    const [fonSize, setFontSize] = useState(['1', '2', '3', '4', '5', '6', '7'])


    const modifyText = (command, defaultUi, value) => {
        document.execCommand(command, defaultUi, value);
    };





    return (
        <div className='containder w-1/2 h-auto min-h-96 bg-slate-50 rounded-md p-10'>
            <div className='flex flex-row items-start justify-start flex-wrap gap-5'>
               <button> <box-icon name='bold' id="bold" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                <button> <box-icon name='underline' id="underline" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                <button> <box-icon name='italic' id="italic" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>

                <div className='mr-1' />

                <button> <box-icon name='undo' id='undo' size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                 <button><box-icon name='redo' id='redo' size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                <button> <box-icon name='unlink' id='unlink' size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                <button> <box-icon name='link' id="createLink" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                
                <div className='mr-5' />

               <button>  <box-icon name='list-ul' id="insertOrderedList" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
               <button>  <box-icon name='right-indent' id="indent"  size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
               <button>  <box-icon name='left-indent' id="outdent"  size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
               <button>  <box-icon name='align-left'id="justifyLeft" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
                <button> <box-icon name='align-middle' id="justifyCenter"  size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
               <button>  <box-icon name='align-right' id="justifyRight" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)} ></box-icon></button>
               <button>  <box-icon name='align-justify' id="justifyFull" size='2rem' onClick={(e) => modifyText(e.target.id, false, null)}></box-icon></button>
              
                <select id='formatBlock'  onChange={(e) => modifyText('formatBlock', false, e.target.value)} className='adv-option-button'>
                    <option value="H1">H1</option>
                    <option value="H2" >H2</option>
                    <option value="H3">H3</option>
                    <option value="H4">H4</option>
                    <option value="H5">H5</option>
                    <option value="H6">H6</option>
                </select>

                <select id="fontName" className="adv-option-button" onChange={(e) => modifyText('fontName', false, e.target.value)}>
                    {fontList.map((fontItem) => (
                        <option value={fontItem} key={fontItem} >{fontItem}</option>
                    ))}
                </select>
                
                <select id="fontSize" className="adv-option-button" onChange={(e) => modifyText('fontSize', false, e.target.value)}>
                {fonSize.map((fontItem) => (
                        <option value={fontItem} key={fontItem} >{fontItem}</option>
                    ))}
                </select>
                
                <div className="input-wrapper">
                    <input type="color" id="foreColor" className="adv-option-button" onChange={(e) => modifyText('foreColor', false, e.target.value)}/>
                    <label for="foreColor">Font Color</label>
                </div>
                <div className="input-wrapper">
                    <input type="color" id="backColor" className="adv-option-button" onChange={(e) => modifyText('backColor', false, e.target.value)}/>
                    <label for="backColor">Highlight Color</label>
                </div>
                
            </div>
            <div  contentEditable
                onInput={(e) => setContent(e.target.value)}
                dangerouslySetInnerHTML={{ __html: content }} 
                className='mt-5 block w-full min-h-62 bg-slate-500 min-h-72 p-5' />
        </div>
    );
};

export default TextEditor;