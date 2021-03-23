(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287fb890"],{2741:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"rotate_so3_page"},[t("div",{staticStyle:{"max-width":"1330px",margin:"auto"}},[t("div",{staticClass:"page_header"},[e._v(" Rotation SO(3)/SO(3) Affordance Estimation ")]),t("div",{staticClass:"page_body"},[t("div",{staticClass:"page_section"},[e._v(" Leaderboard ")]),t("div",{staticClass:"section_contain"},[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"items-per-page":5}})],1),t("div",{staticClass:"page_section"},[e._v(" Introduction ")]),e._m(0),t("div",{staticClass:"page_section"},[e._v(" Evaluation Metrics ")]),e._m(1)])])])},o=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"section_contain"},[t("p",[e._v(" The shapes in 3D AffordanceNet are all aligned in canonical poses, however, the data observed by sensors in the real world are not always in canonical poses. The difference in rotation between real data and training data will lead to a performance drop in real-world usage. ")]),t("p",[e._v(" Rotation-Invariant affordance estimation aims to estimate the affordance of rotated objects. We propose one rotation setting: SO(3)/SO(3) which SO(3)/SO(3) refers to SO(3) rotation, i.e. freely rotation along x, y and z axes. ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"section_contain"},[t("p",[e._v(" We evaluate four metrics for three affordance estimation tasks, mean Average Precision ("),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("mAP")]),e._v(") scores, mean squared error ("),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("MSE")]),e._v("), mean Area Under Curve ("),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("mAUC")]),e._v("), and average Intersection Over Union ("),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("aIoU")]),e._v("). Except for the MSE, all the other metrics for each category are averaged over all shapes, a.k.a. macro-average. ")]),t("p",[e._v(" For each affordance category, the ground-truth map is binarized with 0.5 threshold for all evaluations. ")]),t("p",[e._v(" For "),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("mAP")]),e._v(", we calculate the Precision-Recall Curve and AP is calculated for each affordance. Then the mAP is the average over the AP of all affordance categories. ")]),t("p",[e._v(" For "),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("mAUC")]),e._v(", we calculate the area under ROC Curve (AUC) for each affordance. Then the "),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("mAUC")]),e._v(" is the average over the AUC of all affordance categories. ")]),t("p",[e._v(" For "),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("MSE")]),e._v(", we calculated the mean squared error of each affordance category and sum up the results from all affordance categories. ")]),t("p",[e._v(" For "),t("code",{staticClass:"language-plaintext highlighter-rouge"},[e._v("aIoU")]),e._v(", we gradually tune up the threshold from 0 to 0.99 with 0.01 step to binarize the prediction, and the aIoU is the arithmetic average of all IoUs at each threshold. ")])])}],i={name:"full_shape",data:function(){return{headers:[{text:"Full-Shape",value:"model",sortable:!1,align:"center"},{text:"mAP(%)",value:"mAP",sortable:!0,align:"center"},{text:"mAUC(%)",value:"mAUC",sortable:!0,align:"center"},{text:"aIOU(%)",value:"aIOU",sortable:!0,align:"center"},{text:"MSE",value:"MSE",sortable:!0,align:"center"}],desserts:[{model:"PointNet++",mAP:41.8,mAUC:83.3,aIOU:15.2,MSE:.072},{model:"DGCNN",mAP:37.3,mAUC:78.9,aIOU:12.8,MSE:.08}]}}},s=i,n=(t("3279"),t("2877")),l=Object(n["a"])(s,r,o,!1,null,"3daa757e",null);a["default"]=l.exports},3279:function(e,a,t){"use strict";t("443e")},"443e":function(e,a,t){}}]);