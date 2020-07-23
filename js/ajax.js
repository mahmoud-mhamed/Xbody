$(function () {
    var dateFrom=$("input[data-date='from']");
    var dateTo=$("input[data-date='to']");
    var date=new Date();
    date=date.getFullYear()+'-'+(date.getMonth()- -1)+'-'+date.getDate();
    dateFrom.val(date);
    dateTo.val(date);
    Usage:dateFrom.parent()
        .dateRangePicker({
                autoClose: true,
                singleDate :false,
                showShortcuts: false,
                singleMonth: true,
                startDate:'2018-10-7',
                endDate:date,
                separator : ' to ',
                extraClass:'datePicker',
                getValue: function()
                {
                    if (dateFrom.val() && dateTo.val() )
                        return dateFrom.val() + ' to ' + dateTo.val();
                    else
                        return '';
                },
                setValue: function(s,s1,s2)
                {
                    dateFrom.val(s1);
                    dateTo.val(s2);
                }
            }
        );
});
$(function () {
    function getData() {
        var datefrom=$("input[data-date='from']").val(),
            dateTo=$("input[data-date='to']").val();
        $.ajax({
            url:"getData.php",
            method:"POST",
            data:{dateFrom:datefrom,dateTo:dateTo},
            success:function(data){
                $('#mainTable tbody').html(data);
            }
        });
    }

    $("input[data-date='from'],input[data-date='to']").on('click change',function () {
        getData();
    });
    $(".datePicker").on('click',function () {
        getData();
    });
    getData();


    function getSupData(id){
        $.ajax({
            url:"getData.php",
            method:"POST",
            data:{id:id},
            success:function(data){
                $('#detailsTable tbody').html(data);
            }
        });
    }
    $('#mainTable').on('click','a',function (e) {
        e.preventDefault();
        var id=$(this).attr('data-show') ;
       getSupData(id);
    });
});