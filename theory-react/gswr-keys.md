Keys tell React which array item each components corresponds to, so that it can
match them up later.

- Keys must be unique among siblings, but its ok to use the same for JSX nodes in
  different arrays.
- Keys must no change and must not be manually generated.

```Javascript
const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];



```

Index can be used as key in:

1.  The items in your list do not have a unique id.
2.  The list is a static list and will not change - items won't be added or deleted.
3.  The list will never be reordered or filtered.
4.  The identity/content of an item at a given positon won't change in a way that
    would make React confuse it with another item.
