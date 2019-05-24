var urlParams = new URLSearchParams(window.location.search);
var form_id = urlParams.get('form_id');
var obj = urlParams.get('not');
var excl = obj.split('+');
var parent = urlParams.get('pt') !== 'NULL' ? urlParams.get('pt') : 0;
var parent_of = urlParams.get('ptof') !== 'NULL' && parent === 0 ? urlParams.get('ptof') : 0;

var str;
var types = { tbn: ':not([type=button])', tcx: ':not([type=checkbox])', tcr: ':not([type=color])', tde: ':not([type=date])', tdl: ':not([type=datetime-local])', tel: ':not([type=email])', tfe: ':not([type=file])', thn: ':not([type=hidden])', tie: ':not([type=image])', tmh: ':not([type=month])', tnr: ':not([type=number])', tpd: ':not([type=password])', tro: ':not([type=radio])', tre: ':not([type=range])', trt: ':not([type=reset])', tsh: ':not([type=search])', tst: ':not([type=submit])', ttl: ':not([type=tel])', ttt: ':not([type=text])', tte: ':not([type=time])', tul: ':not([type=url])', twk: ':not([type=week])' };
excl.each(function() {
    if (types.includes($(this))) {
        str += types[$(this)];
    }
});
console.log(str)
eid = on click fill
af = 0 - enables eid by
default on
fid = order_form
pof = email

var urlParams = new URLSearchParams(window.location.search);
var formElement = urlParams.get('fid') !== 'NULL' ? urlParams.get('fid') : (urlParams.get('pof') !== 'NULL' ? $(`#$('input[name="urlParams.get('pof')"]').parents('form').attr('id')}`) : alert('Error'));
if (urlParams.get('af') != 0) {
    if (urlParams.get('eid') !== 'NULL' && $(`#${urlParams.get('eid')}`).length !== 0) {
        $(`#${urlParams.get('eid')}`).on('click', function() { $(`#${formElement} input`).each(function() { $(this).val(urlParams.get($(this).attr('name'))) }) })
    } else {
        $(`#${formElement} input`).each(function() { $(this).val(urlParams.get($(this).attr('name'))) })
    }
}

$(`#${$(`input[name="${urlParams.get('pof')}"]`).parents('form').attr('id')} input`) 

var urlParams = new URLSearchParams(window.location.search);
var formElement = urlParams.get('fid') !== 'NULL' ? $(`${urlParams.get('fid')} input`) : (urlParams.get('pof') !== 'NULL' ? $(`#${$(`input[name="${urlParams.get('pof')}"]`).parents('form').attr('id')} input`) : alert('Error'));
if (urlParams.get('af') != 0) {
    $(`${formElement}`).each(function() { $(this).val(urlParams.get($(this).attr('name'))) })
}else{
	if (urlParams.get('eid') !== 'NULL' && $(`#${urlParams.get('eid')}`).length !== 0) {
		$(`#${urlParams.get('eid')}`).on('click', function() { $(`#${formElement}`).each(function() { $(this).val(urlParams.get($(this).attr('name'))) }) })
	}else{
		alert('Erorr! No Event ID Click provided');
	}
}