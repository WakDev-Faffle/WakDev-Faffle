let styleCSS = {};
styleCSS.modify = (styleValue,className,property,value) => {
    if (typeof styleValue == "string") {} else {console.error("styleValue isn't defined in string value.");return styleValue;}
    if (typeof className == "string") {} else {console.error("className isn't defined in string value.");return styleValue;}
    if (typeof property == "string") {} else {console.error("property isn't defined in string value.");return styleValue;}
    if (typeof value == "string") {} else {console.error("value isn't defined in string value.");return styleValue;}
    splitStr = [];
    dbt = styleValue.indexOf(className) + className.length + 1;
    elmntSelector = styleValue.slice(dbt,styleValue.length);
    if ((elmntSelector.split(property).length / 2) == 1) {
        dbtProprt = elmntSelector.indexOf(property)+property.length+1+dbt;
        splitStr.push(styleValue.slice(0,dbtProprt),value,styleValue.slice(styleValue.indexOf(";",dbtProprt)));
        return splitStr.join("");
    }

    else {
        if (elmntSelector.split(property).length / 2 > 1) {
            console.error("There are 2 or some properties with same name. the function can't execute itself.");
        }
        
        if (elmntSelector.split(property).length / 2 < 1) {
            console.error(property,"don't exsist.");
        }
        return styleValue;
    };

};

styleCSS.setProperty = (styleValue,className,property) => {
    splitStr = [];
	dbt1 = styleValue.indexOf(className)+className.length+1;
    elmntSelector = styleValue.slice(dbt1);
    if (!(elmntSelector.includes(property))) {
        dbt2 = elmntSelector.indexOf("}",dbt1)-1;
        valueProt = " ".repeat(4)+property+": none;\n    ";
        console.log(valueProt);
        splitStr.push(styleValue.slice(0,dbt2),valueProt,styleValue.slice(dbt2));
        return splitStr.join("");
    }

    else {
        console.error(property,"already exists !");
    }
};

/*styleCSS.setProperty = (styleValue,className,property,value) => {
	styleValue.indexOf
}*/

btn = document.body.getElementsByTagName("button").item(0);
btn.addEventListener("mousemove", (m) => {
    Xm = (m.clientX - btn.offsetLeft) + "px";
    Ym = (m.clientY - btn.offsetTop) + "px";
    colorEffect = "radial-gradient(circle at " + Xm + " " + Ym + ", transparent, rgb(0 23 34))";
    btn.style.background = colorEffect;
})

/*btn = document.body.querySelector("#btn");
btn.setAttribute("style","");
btn.addEventListener("mousemove", (mouse) => {
    mouseX = mouse.clientX - btn.offsetLeft;
    mouseX += "px";
    mouseY = mouse.clientY - btn.offsetTop;
    mouseY += "px";
    btn.style.background = "radial-gradient(circle at " + mouseX + " " + mouseY + ", transparent, rgb(0 23 34))";
})
*/