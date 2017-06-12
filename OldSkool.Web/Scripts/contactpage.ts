/// <reference types='vue/types'/>

import * as Vue from "vue";
import * as common from "./common";

export namespace OldSkool.Contact {
    let contact = new Vue({
        el: "#contactForm",
        data: {
            submitted: false
        },
        methods: {
            SubmitContactForm: function () {
                common.OldSkool.Common.Alerter("Successfully submitted contact form.");
            }
        }
    });
}