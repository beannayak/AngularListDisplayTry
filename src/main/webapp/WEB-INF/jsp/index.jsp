<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="req" value="${pageContext.request}" />
<c:set var="url">${req.requestURL}</c:set>
<c:set var="uri" value="${req.requestURI}" />

<!doctype html>
<html lang="en" >
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>HomePage</title>
		<base href="${fn:substring(url, 0, fn:length(url) - fn:length(uri))}${req.contextPath}/">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>
		<script src="resources/js/angular.js"></script>
		<script src="resources/js/angular.min.js"></script>
		<script src="resources/js/angular-route.js"></script>
		<script src="resources/js/appmodule.js"></script>
		
		<script src="resources/js/modules/songs/app/app.js"></script>
		
		<!--conrollers  -->
		<script src="resources/js/modules/songs/controllers/MyController.js"></script>
		
		<!--services  -->
		<script src="resources/js/modules/songs/services/urlService.js"></script>
		
		<script type="text/javascript">
			var getContextUrl = function () {
				return "${fn:substring(url, 0, fn:length(url) - fn:length(uri))}${req.contextPath}";
			};
		</script>
	</head>
	<body>
	<div data-ng-app="myApp">
	<div>{{ hello + " " + world }}</div>
		<div style="width: 500px; margin: auto;">
			<div ng-repeat="song in songsData">			
				<song-info song="song"></song-info>
			</div>
		</div>
	</div>
		
	</body>
</html>