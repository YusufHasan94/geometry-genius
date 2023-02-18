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

//accept value from input field
//convert string to number
function convertStringToNumber(str){
    let getNumber = parseFloat(str);
    return getNumber;
}
//calculation function
function calculation1(value1, value2){
    let result = 0.5*value1*value2;
    return result;
}

function calculation2(value1, value2){
    let result = value1*value2;
    return result;
}
function calculation3(value1, value2){
    let result = 3.14*value1*value2;
    return result.toFixed(2);
}

//object for storing value
let outputResult = {};

//triangle 
var TriangleField1Value, TriangleField2Value, TriangleTotalValue;
let triangleSubmit = document.getElementById('triangleSubmit');
triangleSubmit.addEventListener('click', function(){
    document.getElementById('triangleValueArea').style.display ="block";
    let TriangleField1 = document.getElementById('TriangleField1');
    let TriangleField1Str = TriangleField1.value;
        TriangleField1Value = convertStringToNumber(TriangleField1Str);
    
    let TriangleField2 = document.getElementById('TriangleField2');
    let TriangleField2Str = TriangleField2.value;
        TriangleField2Value = convertStringToNumber(TriangleField2Str);

    let triangleDisplay1 = document.getElementById('triangleDisplay1');
        triangleDisplay1.innerText = TriangleField1Str;

    let triangleDisplay2 = document.getElementById('triangleDisplay2');
        triangleDisplay2.innerText = TriangleField2Str;
    
        TriangleField1.value = '';
        TriangleField2.value = '';

    let triangleInputArea = document.getElementById('triangleInputArea');
        triangleInputArea.style.display = 'none';

    console.log(TriangleField1Value, TriangleField2Value);
        
});
let editTriangleValue = document.getElementById('editTriangleValue');
editTriangleValue.addEventListener('click', function(){
    document.getElementById('triangleInputArea').style.display = "block";
    document.getElementById('triangleValueArea').style.display ="none";
});

//validation & calculation of triangle

let triangleCalculate = document.getElementById('triangleCalculate');
triangleCalculate.addEventListener('click',function(){
    if(typeof(TriangleField1Value) === 'number' && typeof(TriangleField2Value) === 'number'){
        if(TriangleField1Value>=0 && TriangleField2Value>=0){
            TriangleTotalValue = calculation1(TriangleField1Value, TriangleField2Value);
            console.log(TriangleTotalValue); 

            //ResultsContainer.insertAdjacentHTML('beforeend','<div class="ResultsContainer">beforeEnd</div>');
            //let getElementById = document.getElementById('ResultsContainer');
            
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});


//rectangle
var rectangleField1Value, rectangleField2Value, rectangleTotalValue;
let rectangleSubmit = document.getElementById('rectangleSubmit');
rectangleSubmit.addEventListener('click', function(){
    document.getElementById('rectangleValueArea').style.display ="block";
    let rectangleField1 = document.getElementById('rectangleField1');
    let rectangleField1Str = rectangleField1.value;
        rectangleField1Value = convertStringToNumber(rectangleField1Str);
    
    let rectangleField2 = document.getElementById('rectangleField2');
    let rectangleField2Str = rectangleField2.value;
        rectangleField2Value = convertStringToNumber(rectangleField2Str);

    let rectangleDisplay1 = document.getElementById('rectangleDisplay1');
        rectangleDisplay1.innerText = rectangleField1Str;

    let rectangleDisplay2 = document.getElementById('rectangleDisplay2');
        rectangleDisplay2.innerText = rectangleField2Str;
    
        rectangleField1.value = '';
        rectangleField2.value = '';

    let rectangleInputArea = document.getElementById('rectangleInputArea');
        rectangleInputArea.style.display = 'none';
        
});
let editRectangleValue = document.getElementById('editRectangleValue');
editRectangleValue.addEventListener('click', function(){
    document.getElementById('rectangleInputArea').style.display = "block";
    document.getElementById('rectangleValueArea').style.display ="none";
});

//validation & calculation of rectangle
let rectangleCalculate = document.getElementById('rectangleCalculate');
rectangleCalculate.addEventListener('click',function(){
    if(typeof(rectangleField1Value) === 'number' && typeof(rectangleField2Value) === 'number'){
        if(rectangleField1Value>=0 && rectangleField2Value>=0){
            rectangleTotalValue = calculation2(rectangleField1Value, rectangleField2Value);
            console.log(rectangleTotalValue); 
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});

//parallelogram
var parallelogramField1Value, parallelogramField2Value, parallelogramTotalValue;
let parallelogramSubmit = document.getElementById('parallelogramSubmit');
parallelogramSubmit.addEventListener('click', function(){
    document.getElementById('parallelogramValueArea').style.display ="block";
    let parallelogramField1 = document.getElementById('parallelogramField1');
    let parallelogramField1Str = parallelogramField1.value;
        parallelogramField1Value = convertStringToNumber(parallelogramField1Str);
    
    let parallelogramField2 = document.getElementById('parallelogramField2');
    let parallelogramField2Str = parallelogramField2.value;
        parallelogramField2Value = convertStringToNumber(parallelogramField2Str);

    let parallelogramDisplay1 = document.getElementById('parallelogramDisplay1');
        parallelogramDisplay1.innerText = parallelogramField1Str;

    let parallelogramDisplay2 = document.getElementById('parallelogramDisplay2');
        parallelogramDisplay2.innerText = parallelogramField2Str;
    
        parallelogramField1.value = '';
        parallelogramField2.value = '';

    let parallelogramInputArea = document.getElementById('parallelogramInputArea');
        parallelogramInputArea.style.display = 'none';
        
});
let editParallelogramValue = document.getElementById('editParallelogramValue');
editParallelogramValue.addEventListener('click', function(){
    document.getElementById('parallelogramInputArea').style.display = "block";
    document.getElementById('parallelogramValueArea').style.display ="none";
});

//validation & calculation of parallelogram
let parallelogramCalculate = document.getElementById('parallelogramCalculate');
parallelogramCalculate.addEventListener('click',function(){
    if(typeof(parallelogramField1Value) === 'number' && typeof(parallelogramField2Value) === 'number'){
        if(parallelogramField1Value>=0 && parallelogramField2Value>=0){
            parallelogramTotalValue = calculation2(parallelogramField1Value, parallelogramField2Value);
            console.log(parallelogramTotalValue); 
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});

//Rhombus
var rhombusField1Value, rhombusField2Value, rhombusTotalValue;
let rhombusSubmit = document.getElementById('rhombusSubmit');
rhombusSubmit.addEventListener('click', function(){
    document.getElementById('rhombusValueArea').style.display ="block";
    let rhombusField1 = document.getElementById('rhombusField1');
    let rhombusField1Str = rhombusField1.value;
        rhombusField1Value = convertStringToNumber(rhombusField1Str);
    
    let rhombusField2 = document.getElementById('rhombusField2');
    let rhombusField2Str = rhombusField2.value;
        rhombusField2Value = convertStringToNumber(rhombusField2Str);

    let rhombusDisplay1 = document.getElementById('rhombusDisplay1');
        rhombusDisplay1.innerText = rhombusField1Str;

    let rhombusDisplay2 = document.getElementById('rhombusDisplay2');
        rhombusDisplay2.innerText = rhombusField2Str;
    
        rhombusField1.value = '';
        rhombusField2.value = '';

    let rhombusInputArea = document.getElementById('rhombusInputArea');
        rhombusInputArea.style.display = 'none';
        
});
let editRhombusValue = document.getElementById('editRhombusValue');
editRhombusValue.addEventListener('click', function(){
    document.getElementById('rhombusInputArea').style.display = "block";
    document.getElementById('rhombusValueArea').style.display ="none";
});

//validation & calculation of rhombus
let rhombusCalculate = document.getElementById('rhombusCalculate');
rhombusCalculate.addEventListener('click',function(){
    if(typeof(rhombusField1Value) === 'number' && typeof(rhombusField2Value) === 'number'){
        if(rhombusField1Value>=0 && rhombusField2Value>=0){
            rhombusTotalValue = calculation1(rhombusField1Value, rhombusField2Value);
            console.log(rhombusTotalValue); 
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});

//Pentagon
var pentagonField1Value, pentagonField2Value, pentagonField2Value;
let pentagonSubmit = document.getElementById('pentagonSubmit');
pentagonSubmit.addEventListener('click', function(){
    document.getElementById('pentagonValueArea').style.display ="block";
    let pentagonField1 = document.getElementById('pentagonField1');
    let pentagonField1Str = pentagonField1.value;
        pentagonField1Value = convertStringToNumber(pentagonField1Str);
    
    let pentagonField2 = document.getElementById('pentagonField2');
    let pentagonField2Str = pentagonField2.value;
        pentagonField2Value = convertStringToNumber(pentagonField2Str);

    let pentagonDisplay1 = document.getElementById('pentagonDisplay1');
        pentagonDisplay1.innerText = pentagonField1Str;

    let pentagonDisplay2 = document.getElementById('pentagonDisplay2');
        pentagonDisplay2.innerText = pentagonField2Str;
    
        pentagonField1.value = '';
        pentagonField2.value = '';

    let pentagonInputArea = document.getElementById('pentagonInputArea');
        pentagonInputArea.style.display = 'none';
        
});
let editPentagonValue = document.getElementById('editPentagonValue');
editPentagonValue.addEventListener('click', function(){
    document.getElementById('pentagonInputArea').style.display = "block";
    document.getElementById('pentagonValueArea').style.display ="none";
});

//validation & calculation of Pentagon
let pentagonCalculate = document.getElementById('pentagonCalculate');
pentagonCalculate.addEventListener('click',function(){
    if(typeof(pentagonField1Value) === 'number' && typeof(pentagonField2Value) === 'number'){
        if(pentagonField1Value>=0 && pentagonField2Value>=0){
            rhombusTotalValue = calculation1(pentagonField1Value, pentagonField2Value);
            console.log(rhombusTotalValue); 
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});

//ellipse
var ellipseField1Value, ellipseField2Value, ellipseTotalValue;
let ellipseSubmit = document.getElementById('ellipseSubmit');
ellipseSubmit.addEventListener('click', function(){
    document.getElementById('ellipseValueArea').style.display ="block";
    let ellipseField1 = document.getElementById('ellipseField1');
    let ellipseField1Str = ellipseField1.value;
        ellipseField1Value = convertStringToNumber(ellipseField1Str);
    
    let ellipseField2 = document.getElementById('ellipseField2');
    let ellipseField2Str = ellipseField2.value;
        ellipseField2Value = convertStringToNumber(ellipseField2Str);

    let ellipseDisplay1 = document.getElementById('ellipseDisplay1');
        ellipseDisplay1.innerText = ellipseField1Str;

    let ellipseDisplay2 = document.getElementById('ellipseDisplay2');
        ellipseDisplay2.innerText = ellipseField2Str;
    
        ellipseField1.value = '';
        ellipseField2.value = '';

    let ellipseInputArea = document.getElementById('ellipseInputArea');
        ellipseInputArea.style.display = 'none';
        
});
let editEllipseValue = document.getElementById('editEllipseValue');
editEllipseValue.addEventListener('click', function(){
    document.getElementById('ellipseInputArea').style.display = "block";
    document.getElementById('ellipseValueArea').style.display ="none";
});

//validation & calculation of ellipse
let ellipseCalculate = document.getElementById('ellipseCalculate');
ellipseCalculate.addEventListener('click',function(){
    if(typeof(ellipseField1Value) === 'number' && typeof(ellipseField2Value) === 'number'){
        if(ellipseField1Value>=0 && ellipseField2Value>=0){
            ellipseTotalValue = calculation3(ellipseField1Value, ellipseField2Value);
            console.log(ellipseTotalValue); 
        }
        else{
            return;
        }
    }
    else{
        return;
    }
});
