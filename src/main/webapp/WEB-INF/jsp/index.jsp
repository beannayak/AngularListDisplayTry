<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="req" value="${pageContext.request}" />
<c:set var="url">${req.requestURL}</c:set>
<c:set var="uri" value="${req.requestURI}" />

<!doctype html>
<html lang="en" ng-app="myApp">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>HomePage</title>
		<base href="${fn:substring(url, 0, fn:length(url) - fn:length(uri))}${req.contextPath}/">
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
		<script src="resources/js/appmodule.js"></script>
	</head>
	<body ng-controller="MyController">
		<div>{{ hello + " " + world }}</div>
	</body>
</html>