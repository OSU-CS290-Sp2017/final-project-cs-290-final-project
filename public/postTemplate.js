(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"post\">\r\n	<p class=\"post-title\">\n		"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-author\">\n		Posted By: "
	+ alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-category\">\n		Category: "
	+ alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-date\">\n		Post Date: "
	+ alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-location\">\n		Location: "
	+ alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-price\">\n		Price: "
	+ alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-phone\">\n		Phone: "
	+ alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
	+ "	</p>\n	<p class=\"post-email\">\n		Email: "
	+ alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
	+ "	</p>\n\n	<br>\n	<p>Images:</p>\n	<div class=\"img-container\">\n		<a href=\""
	+ alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
	+ "\"><img src=\""
	+ alias4(((helper = (helper = helpers.image1 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image1","hash":{},"data":data}) : helper)))
	+ "\"></a>\n	</div>\n	<div class=\"img-container\">\n		<a href=\""
	+ alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
	+ "\"><img src=\""
	+ alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
	+ "\"></a>\n	</div>\n	<div class=\"img-container\">\n		<a href=\""
	+ alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
	+ "\"><img src=\""
	+ alias4(((helper = (helper = helpers.image2 || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image2","hash":{},"data":data}) : helper)))
	+ "\"></a>\n	</div>\n</article>"
},"useData":true});
})();