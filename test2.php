<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<title>Backbone test2</title>
	<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<h1>Club</h1>

    <ul id="club">
    	<li class="header">
    		<span class="name">Name</span>
	        <span class="type">Type</span>
	        <span class="tickets">Tickets</span>
	        <span class="status">Status</span>
	        <span class="email">Email</span>
	        <span id="show-add">+</span>
        </li>
	    <li id="add-member">
			<input id="name" placeholder="What's the rookie's name?" />
			<input id="email" placeholder="Does the rookie has an email?" />
			<button id="add">Add</button>
		</li>
    </ul>

    <script id="memberTemplate" type="text/template">
        <span class="name"><%= name %></span>
        <span class="type"><%= type %></span>
        <span class="tickets"><%= tickets %></span>
        <span class="status"><%= status %></span>
        <span class="email"><a href="mailto:<%= email %>"><%= email %></a></span>
    </script>

	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="underscore.js"></script>
	<script type="text/javascript" src="backbone.js"></script>
	<script type="text/javascript" src="test2.js"></script>

</body>
</html>