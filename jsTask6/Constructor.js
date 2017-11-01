function Renderer() {}

Renderer.prototype.create = function(dataObj, propObj) {
    this.element = document.createElement(propObj.tag);
    if (propObj.classes) {
        for (var i = 0; i < propObj.classes.length; i++) {
            this.element.classList.add(propObj.classes[i]);
        }
    }
    if (propObj.content) {
        this.element.innerHTML = propObj.content;
    }
    if (propObj.property) {
        this.element.innerHTML = dataObj[propObj.property];
    }
    if (propObj.arrayOfElements) {
        this.element = [];
        for (var i = 0; i < dataObj[propObj.property].length; i++) {
            this.element.push(document.createElement(propObj.tag));
            this.element[i].className = propObj.classes[0];
            this.element[i].innerHTML = dataObj[propObj.property][i];

            if (Array.isArray(dataObj[propObj.property][i])) {
                this.element[i].classList.add(propObj.classes[1]);
            }
        }
    }

    if (propObj.event) {
        this.element.addEventListener(propObj.event[0], propObj.event[1])
    }
    return this.element;
}

Renderer.prototype.render = function(elem, parentElem) {
    if (Array.isArray(elem)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        for (var i = 0; i < elem.length; i++) {
            this.currentElem.appendChild(elem[i]);
        };
    } else if (!(Array.isArray(elem)) && (parentElem !== undefined)) {
        this.currentElem = document.querySelector('.' + parentElem.className);
        this.currentElem.appendChild(elem);
    } else {
        document.body.insertBefore(elem, document.body.children[0]);
    }
}