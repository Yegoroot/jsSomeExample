// ключ - экземпляр объекта Select

function initSelect(select) {
    var selectList = {};
    var i = 0;
    $(select).each(function (selectIndex, selectNode) {
      var field = $(this).data("field");
      if (!$(selectNode).parent().hasClass('select')) {
        if(field)
        {
            selectIndex = field;
        }
        selectList[selectIndex] = new Select(selectNode, selectIndex);
        if (typeof selectList[selectIndex] != 'undefined') selectList[selectIndex].init();
  
        $(selectNode).parent().find('.select__selected').off().click(function () {
          Select.open(selectList[selectIndex]);
        });
  
        $(selectNode).parent().find('.select__options-item').off().click(function () {
          selectList[selectIndex].choose($(this).index(), $(this).data('value'), $(this).text());
          Select.close(selectList[selectIndex]);
        });
      }
    });
  
    return selectList;
  
  }