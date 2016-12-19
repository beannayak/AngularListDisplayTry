<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="req" value="${pageContext.request}" />
<c:set var="url">${req.requestURL}</c:set>
<c:set var="uri" value="${req.requestURI}" />
<c:set var="baseUrl" value="${fn:substring(url, 0, fn:length(url) - fn:length(uri))}${req.contextPath}" />

<!doctype html>
<html lang="en" >
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>HomePage</title>
		<base href="${baseUrl}/">
		<link rel="stylesheet" type="text/css" href="resources/css/songsInfo.css">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
		<script src="resources/js/angular.js"></script>
		<script src="resources/js/angular.min.js"></script>
		<script src="resources/js/angular-route.js"></script>
		
		<!-- Main Application -->
		<script src="resources/js/modules/songs/app/app.js"></script>
		
		<!-- controllers -->
		<script src="resources/js/modules/songs/controllers/MyController.js"></script>
		
		<!-- services -->
		<script src="resources/js/modules/songs/services/urlService.js"></script>
		<script src="resources/js/modules/songs/services/urlStringService.js"></script>
		
		<!-- directives -->
		<script src="resources/js/modules/songs/directives/songInfo.js"></script>
		
		<script type="text/javascript">
			var getContextUrl = function () {
				return "${baseUrl}";
			};
		</script>
	</head>
	<body data-ng-app="myApp">
		<div data-ng-view></div>
	</body>
</html>