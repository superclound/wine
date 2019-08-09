import messageBox from "./index.vue";
import Vue from "vue";

export const MessageBox = (function () {
    let defaultProps = {      
        message: "确认此操作吗",
        handleOK: function () { },
        handleCancel: function () { }
    }
    let messageVue = Vue.extend(messageBox);

    return (options) => {
        for (var key in options) {
            if (options[key]) {
                defaultProps[key] = options[key];
            }
        }
        let messageVm = new messageVue({
            el: document.createElement("div"),
            data: {
                message: defaultProps.message
            },
            methods: {
                handleTrue(){
                    defaultProps.handleOK&&defaultProps.handleOK()
                    document.body.removeChild(messageVm.$mount().$el)
                },
                handleFalse(){
                    defaultProps.handleCancel&&defaultProps.handleCancel()
                    document.body.removeChild(messageVm.$mount().$el)
                },
               
            }
        })

        document.body.appendChild(messageVm.$mount().$el);

    }



})()


