# Autofiller
Autofiller fills in form inputs with values by matching query keys form the URL to the input's name attribute.

Autofiller takes the form_id query as a main from element which holds all the inputs you need to fill in.
While iterrating the form childrens, the script tries to find a matching key = inputName pair and when it finds one it takes the value from the URL and places it as a value to the matched input. 
