import { fetch } from './http';
import url from '../../api/url';

/*
* 获取微信appid、签名
*/
export const GetToken = data => fetch(url.token, data, 'POST');
/*
* 卡密充值卡片验证
*/
export const CardValidate = data => fetch(url.cardJudge, data, 'POST');
/*
* 卡密充值卡片确认充值
*/
export const CardRecharge = data => fetch(url.cardRecharge, data, 'POST');
/*
* 卡密充值记录
*/
export const CardRecord = data => fetch(url.cardRecord, data, 'GET');
/*
* 扫码充值记录
*/
export const CodeRecord = data => fetch(url.codeRecord, data, 'GET');