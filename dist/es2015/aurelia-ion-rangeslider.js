var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoinject, bindable, bindingMode } from "aurelia-framework";
import * as $ from "jquery";
import "ion-rangeslider";
let AureliaIonRangesliderCustomElement = class AureliaIonRangesliderCustomElement {
    constructor(element) {
        this.element = element;
        this.itemsToSet = {};
    }
    attached() {
        this.itemsToSet.onChange = (x) => this.updateValues(x);
        this.itemsToSet.onUpdate = (x) => this.updateValues(x);
        $(this.element).children('input').first().ionRangeSlider(this.itemsToSet);
        this.slider = $(this.element).children('input').first().data('ionRangeSlider');
    }
    updateValues(x) {
        this.to = x.to;
        this.to_percent = x.to_percent;
        this.to_value = x.to_value;
        this.from = x.from;
        this.from_percent = x.from_percent;
        this.from_value = x.from_value;
    }
    propertyChanged(name, newValue, oldValue) {
        if (!this.slider) {
            this.itemsToSet[name] = newValue;
            return;
        }
        if (this.slider.result[name] == newValue)
            return;
        let data = {};
        data[name] = newValue;
        this.slider.update(data);
    }
};
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "type", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "min", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "max", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "from", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "from_percent", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "from_value", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "to", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "to_percent", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], AureliaIonRangesliderCustomElement.prototype, "to_value", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "step", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "min_interval", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "max_interval", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "drag_interval", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "values", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "p_values", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "from_fixed", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "from_min", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "from_max", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "from_shadow", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "to_fixed", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "to_min", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "to_max", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "to_shadow", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "prettify_enabled", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "prettify_separator", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "prettify", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "force_edges", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "keyboard", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "keyboard_step", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "grid", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "grid_margin", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "grid_num", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "grid_snap", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "hide_min_max", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "hide_from_to", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "prefix", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "postfix", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "max_postfix", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "decorate_both", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "values_separator", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "input_values_separator", void 0);
__decorate([
    bindable
], AureliaIonRangesliderCustomElement.prototype, "disable", void 0);
AureliaIonRangesliderCustomElement = __decorate([
    autoinject
], AureliaIonRangesliderCustomElement);
export { AureliaIonRangesliderCustomElement };
