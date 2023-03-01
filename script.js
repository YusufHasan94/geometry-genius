let shape = document.getElementsByClassName('shapeCard');
//hover effect on shapes card
var symbol, color;
for (const shapes of shape) {
    shapes.addEventListener('mouseover', function(){
        symbol = "0123456789ABCDEF";
        color = "#";
        for(let i=0; i<6; i++){
            color = color+symbol[Math.floor(Math.random()*16)];
            shapes.style.backgroundColor = color;
        }
    });
}
for (const shapes of shape) {
    shapes.addEventListener('mouseout', function(){
        for(let i=0; i<6; i++){
            shapes.style.backgroundColor = "transparent";
        }
    });
}
//convert string to number
function convertStringToNumber(str){
    let getNumber= parseFloat(str);
    return getNumber;
}

//calculation function
function calculation1(value1, value2){
    let result = 0.5*value1*value2;
    return result.toFixed(2);
}

function calculation2(value1, value2){
    let result = value1*value2;
    return result.toFixed(2);
}
function calculation3(value1, value2){
    let result = Math.PI*value1*value2;
    return result.toFixed(2);
}

//adding result into calculation area
let count = 0;
function addingResult(name, res){
    count++;
    let resContainer = document.getElementById('ResultsContainer');
    let newContainer = document.createElement('div');
    newContainer.innerHTML = `
        <div class="flex justify-between items-center my-1 px-2">
            <span class="text-xl">${count}.</span>
            <span class="text-xl">${name}</span>
            <span class="text-xl">${res} cm<sup>2</sup></span>
            <button class="p-2 bg-sky-600 text-white text-lg rounded ">Convert to m<sup>2<sup></button>
            <button id="closeBtn" class="bg-red-600 text-white p-2 rounded" onclick="closeFun(event)"><i class="fa-solid fa-xmark"></i></button>
        </div>
    `;
    resContainer.appendChild(newContainer);
}

//function to delete selected item
function closeFun(event){
    count--;
    let value = event.target.parentNode.parentNode;
    value.innerHTML='';
}

//function for getting value and display
function getValues(inputField1, inputField2, displayField1, displayField2, displayArea, inputArea){
    let valueField1 = document.getElementById(`${inputField1}`).value;
    let valueField2 = document.getElementById(`${inputField2}`).value;
    let value1 = convertStringToNumber(valueField1);
    let value2 = convertStringToNumber(valueField2);   
    if((valueField1 =='') || (valueField2 =='')){
        alert("Enter valid number");
    }
    else{
        if(typeof(value1) =='number' && typeof(value2) == 'number'){
            if(value1>=0 && value2>=0){
                let display1 = document.getElementById(`${displayField1}`);
                let display2 = document.getElementById(`${displayField2}`);
                let newDisplayArea = document.getElementById(`${displayArea}`);
                newDisplayArea.style.display = 'block';
                display1.innerText = value1;
                display2.innerText = value2; 
                let newInputArea = document.getElementById(`${inputArea}`);
                newInputArea.style.display = 'none';
            }
            else{
                alert("Number should be positive");
            }
        }
        else{
            alert("String not acceptable");
        }
    } 
    return{valueField1,valueField2,value1, value2};
}
//function for edit values
function editValues(inputArea, displayArea){
    let newInputArea = document.getElementById(`${inputArea}`);
    newInputArea.style.display = 'block';
    let newDisplayArea = document.getElementById(`${displayArea}`);
    newDisplayArea.style.display = 'none';
}

//calculate results
let calculate = document.querySelectorAll('.calculationBtn');
calculate.forEach((element) => {
    element.addEventListener('click',(event)=>{
        let shape = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        if(shape == 'Triangle'){
            let values = getValues('TriangleField1', 'TriangleField2', 'triangleDisplay1', 'triangleDisplay2', 'triangleValueArea', 'triangleInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation1(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }else if(shape === 'Rectangle'){
            let values = getValues('rectangleField1', 'rectangleField2', 'rectangleDisplay1', 'rectangleDisplay2', 'rectangleValueArea', 'rectangleInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation2(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }else if(shape == 'Parallelogram'){
            let values = getValues('parallelogramField1', 'parallelogramField2', 'parallelogramDisplay1', 'parallelogramDisplay2', 'parallelogramValueArea', 'parallelogramInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation2(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }else if(shape == 'Rhombus'){
            let values = getValues('rhombusField1', 'rhombusField2', 'rhombusDisplay1', 'rhombusDisplay2', 'rhombusValueArea', 'rhombusInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation1(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }else if(shape == 'Pentagon'){
            let values = getValues('pentagonField1', 'pentagonField2', 'pentagonDisplay1', 'pentagonDisplay2', 'pentagonValueArea', 'pentagonInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation1(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }else if(shape == 'Ellipse'){
            let values = getValues('ellipseField1', 'ellipseField2', 'ellipseDisplay1', 'ellipseDisplay2', 'ellipseValueArea', 'ellipseInputArea');
            if(values.valueField1 != '' || values.valueField2 != '' ){
                if(values.value1>=0 && values.value2>=0){
                    let result = calculation3(values.value1, values.value2);
                    addingResult(`${shape}`, result);
                }
            }
        }
        else{
            console.log("No shapes Available.");
        }
    });
});

//edit values
let edit = document.querySelectorAll('.editValues');
edit.forEach((element) => {
    element.addEventListener('click',(event)=>{
        let shape = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText;
        if(shape === 'Triangle'){
            editValues('triangleInputArea', 'triangleValueArea');
        }else if(shape === 'Rectangle'){
            editValues('rectangleInputArea', 'rectangleValueArea');
        }else if(shape == 'Parallelogram'){
            editValues('parallelogramInputArea', 'parallelogramValueArea');
        }else if(shape == 'Rhombus'){
            editValues('rhombusInputArea', 'rhombusValueArea');
        }else if(shape == 'Pentagon'){
            editValues('pentagonInputArea', 'pentagonValueArea');
        }else if(shape == 'Ellipse'){
            editValues('ellipseInputArea', 'ellipseValueArea');
        }
        else{
            console.log("No shapes Available.");
        }
    });
});