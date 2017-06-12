/// <reference types='vue/types'/>

import * as Vue from "vue";
import * as common from "./common";

export namespace OldSkool.HomePage {
    let clicker = new Vue({
        el: "#clicker",
        data: {
            timesClicked: 0
        },
        methods: {
            Increment: function () {
                (<any>this).timesClicked++;
                common.OldSkool.Common.Alerter("You've clicked this " + (<any>this).timesClicked + " time(s).");
            }
        }
    });
}