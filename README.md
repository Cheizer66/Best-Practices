# Vertical-Filter

I'm working on a filter, which filters a array of nested arrays down to the value of one last index. This happens in 5 steps. At each step you choose which index value (string) get used to filter the array further. 

What you will see is a interface with 5 rows which represent a 5 levels deep array. 

Example: You have 5 categories, each have 6 themes. Each of these 6 themes has 6 focusses(sub themes). Each focus has 6 questions. Each question has 1 answer. First you pick a categorie. This narrows the arrays down to all arrays with that categorie. Then a theme, which narrows the array down to only the arrays with that theme... etc...


