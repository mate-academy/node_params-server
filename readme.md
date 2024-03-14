# Params echo server

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

Write a server that reads request url and query and returns a JSON with
- `parts` - an array of `pathname` parts (`/hello/world/123` gives `['hello', 'world', '123']`, but doubled slashes should be ignored `//hello/world/123` gives `['hello', 'world', '123']` as well)
- `query` - an object with key/value pairs of all queryParams

# Examples
```
GET /hello/world/123?x=1&search=some
```
```json
{
  "parts": ["hello", "world", "123"],
  "query": {
    "x": "1",
    "search": "some"
  }
}
