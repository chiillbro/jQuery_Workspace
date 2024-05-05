<% ' Check if the request method is POST If
Request.ServerVariables("REQUEST_METHOD") = "POST" Then ' Retrieve data from the
POST request Dim fname, city fname = Request.Form("name") city =
Request.Form("city") ' Check if the name and city variables are not empty If
fname <> "" And city <> "" Then ' Construct the response Response.Write("Dear "
& fname & ". ") Response.Write("Hope you live well in " & city & ".") Else '
Handle case where either name or city is empty Response.Write("Please provide
both name and city.") End If Else ' Handle non-POST requests
Response.Write("This page only accepts POST requests.") End If %>
