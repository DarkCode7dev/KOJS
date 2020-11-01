<ul data-bind="foreach:friends">
	<li>
		<span data-bind="text:name"></span>
		<input type="checkbox" data-bind="checked:knowJS"/>
		<input data-bind="value:fevLib, visible:knowJS"/>
	</li>
</ul>
<button data-bind="click:addFriend">Add Friend</button>
<script src="knockout-3.5.1.js"></script>

<script >
	function Friend(name){

		this.name=name;
		this.knowJS = ko.observable(false);
		this.fevLib = ko.observable('');
	}
	var obj ={
		
		friends: ko.observableArray([new Friend('Arun'), new Friend('Aditya'),new Friend('Adi')])
};

obj.addFriend = function()
{
	obj.friends.push(new Friend('New Friend'));
}

	ko.applyBindings(obj);

</script>
