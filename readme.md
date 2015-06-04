#jquery.ticker

## example

####Create news

  ```
  <ul class="news" id="test">
    <li>テストテキスト - 1</li>
    <li>テストテキスト - 2</li>
    <li>テストテキスト - 3</li>
    <li>テストテキスト - 4</li>
    <li>テストテキスト - 5</li>
  </ul>
  ```
  
####Runch  
  ```
  $('.parent').diffViewer();
  ```
  
## options

```
$('.parent').diffViewer({speed:300, span:500});
```

1. <dl>
<dt>speed<dt>
<dd>set move speed.</dd>
<dd>*default : 100*</dd>
</dl>
1. <dl>
  <dt>span<dt>
  <dd>set margin each-other.</dd>
  <dd>*default : 100*</dd>
  </dl>


##version
- 1.0 - create library