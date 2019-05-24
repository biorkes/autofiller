### Autofiller
Autofiller is a tiny **~3kb**, simple, ready to use javscript that fills in form inputs based on the key=value pairs from the URL.

## Queries

Every input you need to fill in must have a name attribute matching to a key from the queries.

**?phone=12345** - find an input with name "phone" and change its value to "12345"

**?email=john@gmail.com&name=John%20Doe&city=Paris** - find inputs with name "email","name","city" and change their values according to the **key=value** pairs

## Parameters:

- `autofiller` - Triggers Autofiller
- `af` - Will autofill the form after page is loaded
- `fid` - ID of the Form
- `pof` - Name of a child element that's part of the form
- `eid` - ID of an element that triggers Autofiller with a click event

# `autofiller`
You can trigger the scripts by passing an autofiller query parameter in the URL.

**?autofiller=1** - Triggers the script

# `af`
Aufotiller will not auotfill anything except you pass an `af` (stands for 'autofill') parameter in order to do that.

**af** - AutoFill ( this parameters does not require a special value but simply must exist in the URL)

Ex.
**?af**

# `eid`
You can trigger Autofiller with a click event by passing an ID of an element which will trigger the script

`eid` = HTML Element ID that triggers Autofiller 

Ex.
**?eid=submit_btn**

# `fid` and `pof`
There are two ways to define which form you want to fill in - by passing an ID of the Form `fid` (Form ID) or a child element of the form `pof` (Parent OF).

`fid` - A Form id attribute
`pof` - Pass the name of a child input to find the form

Ex.
**?fid=order_form** or **?pof=email**