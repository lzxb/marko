"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {}
      },
    marko_componentType = "/marko-test$1.0.0/components-compilation/fixtures/key-colon-attr/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_keyAttr = require("marko/src/components/taglib/helpers/markoKeyAttr"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"root\"><label :key=\"name\">Name</label><input" +
    marko_attr("id", __component.elId("name")) +
    marko_attr("data-marko-key", marko_keyAttr("name", __component)) +
    "></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/components-compilation/fixtures/key-colon-attr/index.marko",
    component: "./"
  };
