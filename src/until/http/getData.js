import {fetch} from './http';
import api from '../../api/api';

/*
* 获取天气
*/
export const getWeather = data => fetch(api.weather, data, 'POST');
/*
* 账号密码登录
*/
export const Login = data => fetch(api.login, data,'POST');
/*
* 获取短信验证码
*/
export const Code = data => fetch(api.getCode, data, 'POST');
/*
* 退出登录
*/
export const Logout = data => fetch(api.logout, data, 'POST');
/*
* 导航数据
*/
export const Menu = data => fetch(api.getMenu, data, 'POST');
/**************************************************************************************/
/*
* 用户列表
*/
export const UserList = (data, page) => fetch(api.userList + '?p=' + page, data, 'POST');
/*
* 管理员禁用、启用
*/
export const Disabled = data => fetch(api.disabled, data, 'POST');
/*
* 部门列表
*/
export const Department = data => fetch(api.department, data, 'POST');
/*
* 角色列表
*/
export const Role = (page, data) => fetch(api.role + '?p=' + page, data, 'POST');
/*
* 添加管理员
*/
export const AddUser = data => fetch(api.addUser, data, 'POST');
/*
* 添加角色
*/
export const AddRole = data => fetch(api.addRole, data, 'POST');
/*
* 删除角色
*/
export const DelateRole = data => fetch(api.delRole, data, 'POST');
/*
* 角色禁用、启用
*/
export const disableRole = data => fetch(api.disableStartRole, data, 'POST');
/*
* 图标列表
*/
export const IconList = (page, data) => fetch(api.IconList + '?p=' + page, data, 'POST');
/*
* 添加图标
*/
export const AddIcon = data => fetch(api.addIcon, data, 'POST');
/*
* 修改列表
*/
export const ExitIcon = data => fetch(api.editIcon, data, 'POST');
/*
* 部门列表
*/
export const departmentList = (page, data) => fetch(api.departmentList + '?p=' + page, data, 'POST');
/*
* 添加部门
*/
export const AddDepartment = data => fetch(api.addDepartment, data, 'POST');
/*
* 部门禁用、启用
*/
export const DisableDepartment = data => fetch(api.disableDepartment, data, 'POST');
/*
* 菜单列表
*/
export const MenuList = (page, data) => fetch(api.menuList + '?p=' + page, data, 'POST');
/*
* 添加菜单
*/
export const AddMenu = data => fetch(api.addMenu, data, 'POST');
/*
* 菜单禁用、启用
*/
export const DisableMenu = data => fetch(api.disableMenu, data, 'POST');
/*
* 一级菜单列表
*/
export const FirstMenuList = data => fetch(api.firstMenuList, data, 'POST');
/*
* 图标列表
*/
export const MenuIconList = data => fetch(api.menuIconList, data, 'POST');
/*
* 查询二级导航
*/
export const SecondMenu = data => fetch(api.secondMenu, data, 'POST');
/*
* 查询二级导航的功能
*/
export const AllMenuFunc = data => fetch(api.allMenuList, data, 'POST');
/*
* 设置用户菜单权限
*/
export const SetUserMenu = data => fetch(api.userMenuSet, data, 'POST'); 
/*
* 设置用户页面功能权限
*/
export const SetUserFunction = data => fetch(api.userFunctionSet, data, 'POST');
/*
* 页面功能列表
*/
export const FunctionList = (page, data) => fetch(api.functionList + '?p=' + page, data, 'POST');
/*
* 新增页面功能
*/
export const AddFunction = data => fetch(api.addFunction, data, 'POST');
/*
* 删除页面功能
*/
export const DelFunction = data => fetch(api.delFunction, data, 'POST');
/**************************************************************************************/
/*
* 全部充值记录列表
*/
export const RechargeRecord = (page, data) => fetch(api.rechargeRecord + '?p=' + page, data, 'GET');
/*
* 卡密批量成功
*/
export const CardSuccess = data => fetch(api.cardSuccess, data, 'POST');
/*
* 扫码批量失败
*/
export const CodeSuccess = data => fetch(api.codeSuccess, data, 'POST');
/*
* 卡密批量失败
*/
export const CardCancel = data => fetch(api.cardCancel, data, 'POST');
/*
* 扫码批量成功
*/
export const CodeCancel = data => fetch(api.codeCancel, data, 'POST');
/**************************************************************************************/
/*
* 卡密话费记录列表
*/
export const BillRecordList = (page, data) => fetch(api.billRecordList + '?p=' + page, data, 'GET');
/*
* 卡密话费批量成功
*/
export const CardBillSuccess = data => fetch(api.cardBillSuccess, data, 'POST');
/*
* 卡密话费批量失败
*/
export const CardBillCancel = data => fetch(api.cardBillCancel, data, 'POST');
/*
* 卡密话费单个编辑
*/
export const CardBillEdit = data => fetch(api.cardBillEdit, data, 'POST');
/**************************************************************************************/
/*
* 卡密流量记录列表
*/
export const FlowRecordList = (page, data) => fetch(api.flowRecordList + '?p=' + page, data, 'GET');
/*
* 卡密流量批量成功
*/
export const CardFlowSuccess = data => fetch(api.cardFlowSuccess, data, 'POST');
/*
* 卡密流量批量失败
*/
export const CardFlowCancel = data => fetch(api.cardFlowCancel, data, 'POST');
/*
* 卡密流量单个编辑
*/
export const CardFlowEdit = data => fetch(api.cardFlowEdit, data, 'POST');
/**************************************************************************************/
/*
* 卡密油卡记录列表
*/
export const FuelRecordList = (page, data) => fetch(api.fuelRecordList + '?p=' + page, data, 'GET');
/*
* 卡密油卡批量成功
*/
export const CardFuelSuccess = data => fetch(api.cardFuelSuccess, data, 'POST');
/*
* 卡密油卡批量失败
*/
export const CardFuelCancel = data => fetch(api.cardFuelCancel, data, 'POST');
/*
* 卡密油卡单个编辑
*/
export const CardFuelEdit = data => fetch(api.cardFuelEdit, data, 'POST');
/**************************************************************************************/
/*
* 卡密通用记录列表
*/
export const UseRecordList = (page, data) => fetch(api.useRecordList + '?p=' + page, data, 'GET');
/*
* 卡密通用批量成功
*/
export const CardUseSuccess = data => fetch(api.cardUseSuccess, data, 'POST');
/*
* 卡密通用批量失败
*/
export const CardUseFail = data => fetch(api.cardUseFail, data, 'POST');
/*
* 卡密通用批量未处理
*/
export const CardUseCancel = data => fetch(api.cardUseCancel, data, 'POST');
/*
* 卡密通用单个编辑
*/
export const CardUseEdit = data => fetch(api.cardUseEdit, data, 'POST');
/**************************************************************************************/
/*
* 扫码话费记录列表
*/
export const CodeBillRecordList = (page, data) => fetch(api.BillRecordList + '?p=' + page, data, 'GET');
/*
* 扫码话费批量成功
*/
export const CodeBillSuccess = data => fetch(api.codeBillSuccess, data, 'POST');
/*
* 扫码话费批量失败
*/
export const CodeBillCancel = data => fetch(api.codeBillCancel, data, 'POST');
/*
* 扫码话费单个编辑
*/
export const CodeBillEdit = data => fetch(api.codeBillEdit, data, 'POST');
/**************************************************************************************/
/*
* 扫码流量记录列表
*/
export const CodeFlowRecordList = (page, data) => fetch(api.FlowRecordList + '?p=' + page, data, 'GET');
/*
* 扫码流量批量成功
*/
export const CodeFlowSuccess = data => fetch(api.codeFlowSuccess, data, 'POST');
/*
* 扫码流量批量失败
*/
export const CodeFlowCancel = data => fetch(api.codeFlowCancel, data, 'POST');
/*
* 扫码流量单个编辑
*/
export const CodeFlowEdit = data => fetch(api.codeFlowEdit, data, 'POST');
/**************************************************************************************/
/*
* 扫码油卡记录列表
*/
export const CodeFuelRecordList = (page, data) => fetch(api.FuelRecordList + '?p=' + page, data, 'GET');
/*
* 扫码油卡批量成功
*/
export const CodeFuelSuccess = data => fetch(api.codeFuelSuccess, data, 'POST');
/*
* 扫码油卡批量失败
*/
export const CodeFuelCancel = data => fetch(api.codeFuelCancel, data, 'POST');
/*
* 扫码油卡单个编辑
*/
export const CodeFuelEdit = data => fetch(api.codeFuelEdit, data, 'POST');
/**************************************************************************************/
/*
* 扫码通用记录列表
*/
export const CodeUseRecordList = (page, data) => fetch(api.UseRecordList + '?p=' + page, data, 'GET');
/*
* 扫码通用批量成功
*/
export const CodedUseSuccess = data => fetch(api.codedUseSuccess, data, 'POST');
/*
* 扫码通用批量失败
*/
export const CodeUseFail = data => fetch(api.codeUseFail, data, 'POST');
/*
* 扫码通用批量未处理
*/
export const CodeUseCancel = data => fetch(api.codeUseCancel, data, 'POST');
/*
* 扫码密通用单个编辑
*/
export const CodeUseEdit = data => fetch(api.codeUseEdit, data, 'POST');
/**************************************************************************************/
/*
* 产品列表
*/
export const ProductList = data => fetch(api.productList, data, 'POST');
/*
* 卡密话费生成记录列表
*/
export const CardBillList = (page, data) => fetch(api.CardBillList + '?p=' + page, data, 'GET');
/*
* 卡密话费生成
*/
export const CardCreateBill = data => fetch(api.CardCreateBill, data, 'POST');
/*
* 卡密话费删除批次
*/
export const CardBillDelBatch = data => fetch(api.CardBillDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 卡密流量生成记录列表
*/
export const CardFlowList = (page, data) => fetch(api.CardFlowList + '?p=' + page, data, 'GET');
/*
* 卡密流量生成
*/
export const CardCreateFlow = data => fetch(api.CardCreateFlow, data, 'POST');
/*
* 卡密流量删除批次
*/
export const CardFlowDelBatch = data => fetch(api.CardFlowDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 卡密油卡生成记录列表
*/
export const CardFuelList = (page, data) => fetch(api.CardFuelList + '?p=' + page, data, 'GET');
/*
* 卡密油卡生成
*/
export const CardCreateFuel = data => fetch(api.CardCreateFuel, data, 'POST');
/*
* 卡密油卡删除批次
*/
export const CardFuelDelBatch = data => fetch(api.CardFuelDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 卡密通用生成记录列表
*/
export const CardUseList = (page, data) => fetch(api.CardUseList + '?p=' + page, data, 'GET');
/*
* 卡密通用生成
*/
export const CardCreateUse = data => fetch(api.CardCreateUse, data, 'POST');
/*
* 卡密通用删除批次
*/
export const CardUseDelBatch = data => fetch(api.CardUseDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 扫码话费生成记录列表
*/
export const CodeBillList = (page, data) => fetch(api.CodeBillList + '?p=' + page, data, 'GET');
/*
* 扫码话费生成
*/
export const CodeCreateBill = data => fetch(api.CodeCreateBill, data, 'POST');
/*
* 扫码话费删除批次
*/
export const CodeBillDelBatch = data => fetch(api.CodeBillDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 扫码流量生成记录列表
*/
export const CodeFlowList = (page, data) => fetch(api.CodeFlowList + '?p=' + page, data, 'GET');
/*
* 扫码流量生成
*/
export const CodeCreateFlow = data => fetch(api.CodeCreateFlow, data, 'POST');
/*
* 扫码流量删除批次
*/
export const CodeFlowDelBatch = data => fetch(api.CodeFlowDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 扫码油卡生成记录列表
*/
export const CodeFuelList = (page, data) => fetch(api.CodeFuelList + '?p=' + page, data, 'GET');
/*
* 扫码油卡生成
*/
export const CodeCreateFuel = data => fetch(api.CodeCreateFuel, data, 'POST');
/*
* 扫码油卡删除批次
*/
export const CodeFuelDelBatch = data => fetch(api.CodeFuelDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 扫码通用生成记录列表
*/
export const CodeUseList = (page, data) => fetch(api.CodeUseList + '?p=' + page, data, 'GET');
/*
* 扫码通用生成
*/
export const CodeCreateUse = data => fetch(api.CodeCreateUse, data, 'POST');
/*
* 扫码通用删除批次
*/
export const CodeUseDelBatch = data => fetch(api.CodeUseDelBatch, data, 'POST');
/**************************************************************************************/
/*
* 卡密话费激活记录
*/
export const CardBillActiveList = (page, data) => fetch(api.CardBillActiveList + '?p=' + page, data, 'GET');
/*
* 卡密话费激活
*/
export const CardBillActive = data => fetch(api.CardBillActive, data, 'POST');
/*
* 卡密话费冻结
*/
export const CardBillFrozen = data => fetch(api.CardBillFrozen, data, 'POST');
/*
* 卡密话费解冻
*/
export const CardBillThaw = data => fetch(api.CardBillThaw, data, 'POST');
/*
* 卡密话费延期
*/
export const CardBillDelay = data => fetch(api.CardBillDelay, data, 'POST');
/**************************************************************************************/
/*
* 卡密流量激活记录
*/
export const CardFlowActiveList = (page, data) => fetch(api.CardFlowActiveList + '?p=' + page, data, 'GET');
/*
* 卡密流量激活
*/
export const CardFlowActive = data => fetch(api.CardFlowActive, data, 'POST');
/*
* 卡密流量冻结
*/
export const CardFlowFrozen = data => fetch(api.CardFlowFrozen, data, 'POST');
/*
* 卡密流量解冻
*/
export const CardFlowThaw = data => fetch(api.CardFlowThaw, data, 'POST');
/*
* 卡密流量延期
*/
export const CardFlowDelay = data => fetch(api.CardFlowDelay, data, 'POST');
/**************************************************************************************/
/*
* 卡密油卡激活记录
*/
export const CardFuelActiveList = (page, data) => fetch(api.CardFuelActiveList + '?p=' + page, data, 'GET');
/*
* 卡密油卡激活
*/
export const CardFuelActive = data => fetch(api.CardFuelActive, data, 'POST');
/*
* 卡密油卡冻结
*/
export const CardFuelFrozen = data => fetch(api.CardFuelFrozen, data, 'POST');
/*
* 卡密油卡解冻
*/
export const CardFuelThaw = data => fetch(api.CardFuelThaw, data, 'POST');
/*
* 卡密油卡延期
*/
export const CardFuelDelay = data => fetch(api.CardFuelDelay, data, 'POST');
/**************************************************************************************/
/*
* 卡密通用激活记录
*/
export const CardUseActiveList = (page, data) => fetch(api.CardUseActiveList + '?p=' + page, data, 'GET');
/*
* 卡密通用激活
*/
export const CardUseActive = data => fetch(api.CardUseActive, data, 'POST');
/*
* 卡密通用冻结
*/
export const CardUseFrozen = data => fetch(api.CardUseFrozen, data, 'POST');
/*
* 卡密通用解冻
*/
export const CardUseThaw = data => fetch(api.CardUseThaw, data, 'POST');
/*
* 卡密通用延期
*/
export const CardUseDelay = data => fetch(api.CardUseDelay, data, 'POST');
/**************************************************************************************/
/*
* 扫码话费激活记录
*/
export const CodeBillActiveList = (page, data) => fetch(api.CodeBillActiveList + '?p=' + page, data, 'GET');
/*
* 扫码话费激活
*/
export const CodeBillActive = data => fetch(api.CodeBillActive, data, 'POST');
/*
* 扫码话费冻结
*/
export const CodeBillFrozen = data => fetch(api.CodeBillFrozen, data, 'POST');
/*
* 扫码话费解冻
*/
export const CodeBillThaw = data => fetch(api.CodeBillThaw, data, 'POST');
/*
* 扫码话费延期
*/
export const CodeBillDelay = data => fetch(api.CodeBillDelay, data, 'POST');
/**************************************************************************************/
/*
* 扫码流量激活记录
*/
export const CodeFlowActiveList = (page, data) => fetch(api.CodeFlowActiveList + '?p=' + page, data, 'GET');
/*
* 扫码流量激活
*/
export const CodeFlowActive = data => fetch(api.CodeFlowActive, data, 'POST');
/*
* 扫码流量冻结
*/
export const CodeFlowFrozen = data => fetch(api.CodeFlowFrozen, data, 'POST');
/*
* 扫码流量解冻
*/
export const CodeFlowThaw = data => fetch(api.CodeFlowThaw, data, 'POST');
/*
* 扫码流量延期
*/
export const CodeFlowDelay = data => fetch(api.CodeFlowDelay, data, 'POST');
/**************************************************************************************/
/*
* 扫码油卡激活记录
*/
export const CodeFuelActiveList = (page, data) => fetch(api.CodeFuelActiveList + '?p=' + page, data, 'GET');
/*
* 扫码油卡激活
*/
export const CodeFuelActive = data => fetch(api.CodeFuelActive, data, 'POST');
/*
* 扫码油卡冻结
*/
export const CodeFuelFrozen = data => fetch(api.CodeFuelFrozen, data, 'POST');
/*
* 扫码油卡解冻
*/
export const CodeFuelThaw = data => fetch(api.CodeFuelThaw, data, 'POST');
/*
* 扫码油卡延期
*/
export const CodeFuelDelay = data => fetch(api.CodeFuelDelay, data, 'POST');
/**************************************************************************************/
/*
* 扫码通用激活记录
*/
export const CodeUseActiveList = (page, data) => fetch(api.CodeUseActiveList + '?p=' + page, data, 'GET');
/*
* 扫码通用激活
*/
export const CodeUseActive = data => fetch(api.CodeUseActive, data, 'POST');
/*
* 扫码通用冻结
*/
export const CodeUseFrozen = data => fetch(api.CodeUseFrozen, data, 'POST');
/*
* 扫码通用解冻
*/
export const CodeUseThaw = data => fetch(api.CodeUseThaw, data, 'POST');
/*
* 扫码通用延期
*/
export const CodeUseDelay = data => fetch(api.CodeUseDelay, data, 'POST');