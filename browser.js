
import GLOBAL from "@default-js/defaultjs-common-utils/src/Global";
import HTMLJsonDataElement from "./src/HTMLJsonDataElement";

GLOBAL.defaultjs = GLOBAL.defaultjs || {};
GLOBAL.defaultjs.html = GLOBAL.defaultjs.html || {};
GLOBAL.defaultjs.html.HTMLJsonDataElement = GLOBAL.defaultjs.html.HTMLJsonDataElement || HTMLJsonDataElement;

export { HTMLJsonDataElement };