# Autofiller
Autofiller is a simple, ready to use javscript that fills in form inputs based on the key=value pairs from the URL.

Autofiller takes queries from the URL along with a few parameters you need to pass in. You can trigger the scripts by passing an autofiller query parameter in the URL.
**?autofiller=1** - Triggers the script

There are two ways to define which from you have to fill in - by passing an ID of the Form **fid** (Form ID) or a child element of the form **pof** (Parent OF).
**fid** - A Form id attribute
**pof** - Pass the name of a child input to find the form

Every input you need to fill in must have a name attribute matching to a key from the queries. 

**?phone=12345** - find an input with name "phone" and change its value to "12345"
**?email=john@gmail.com&name=John%20Doe&city=Paris** - find inputs with name "email","name","city" and change their values according to the **key=value** pairs

Aufotiller will not auotfill anything except you pass an **af** parameter in order to do that.
**af** - AutoFill ( this parameters does not require a special value but simply must exist in the URL)

You can trigger autofiller with a click event by passing an ID of an element which will trigger the script
**eid** = Element ID 

**?eid=submit_btn**
Clicking a button with id="submit_btn" will autofill the form

 