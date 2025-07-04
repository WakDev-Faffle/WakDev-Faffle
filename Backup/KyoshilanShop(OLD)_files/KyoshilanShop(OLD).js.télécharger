/* clickDetector permet de détecter l'événement du clic (effectuer par la souris) permettant de renvoyer TRUE si l'événement est détecter ou FALSE si non */
clickDetector = document.body;
clickDetector.addEventListener("click", (elementT) => {
    clickDetector = new Object();
    clickDetector.target = elementT.target;
    clickDetector.focus = (element) => {
        if (typeof(element)=='object') {
            if (element.length == undefined) {
                return (element == clickDetector.target);
            }
            else if (typeof(element.length)=='number') {
                for (let i of element) {
                    if (clickDetector.target == i) {
                        var iElement = i;
                        break;
                    };
                };
                return (clickDetector.target == iElement)
            };
        };
    };
},{ passive: true });