/**
 *  @description 实现textarea内部的换行处理
*/

/**
 *  @module normalizeLineBreaks
 *  @param {string} text
 *  @returns {string}
 *  @description 将textarea中的换行符替换成'\n'
*/
export function normalizeLineBreaks(text = '') {
	return String(text).replace(/\r\n/g,'\n').replace(/\r/g,'\n');
}

/**
 *  @function getCharWidth
 *  @param {string} char - 单个字符
 *  @returns {number} - 字符的宽度
 *  @description 中文、全角字符按2，英文字符按1
*/
function getCharWidth(char) {
	if(/[\u4e00-\u9fa5]/.test(char)) return 2;
	if(/[^\x00-\xff]/.test(char)) return 2;
	return 1;
}

/**
 *   @module wrapTextareaText
 *   @function wrapTextareaText
 *   @param {string} text - 字符串文本
 *   @param {number} maxWidth - 限制单行最大宽度
 *   @returns {string}
 *   @description 将textarea中的文本按指定宽度换行
*/
export function wrapTextareaText(text='',maxWidth=32){
	//先对文本进行'\n'的替换
	const value=normalizeLineBreaks(text);
	
	//如果替换后文本为空，直接返回
	if(!value) return '';
	
	//最终处理的字符串
	let result='';
	//当前一行的宽度
	let currentWidth=0;
	
	for(const char of value) {
		if(char==='\n') {
			result+=char;
			currentWidth=0;
			continue;
		}
		
		//获取到当前字符的占位宽度
		const charWidth=getCharWidth(char);
		if(currentWidth+charWidth>maxWidth) {
			result+='\n';
			currentWidth=0;
		}
		
		result+=char;
		currentWidth+=charWidth;
	}
	
	return result;
}

