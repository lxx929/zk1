/*
 * @Author: 刘祥祥 
 * @Date: 2019-03-18 09:40:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-18 09:52:46
 */
btn1.onclick = () => {
    one.style.display = 'block';
    two.style.display = 'none';
    btn1.classList.add('act');
    btn2.classList.remove('act');
}

btn2.onclick = () => {
    one.style.display = 'none';
    two.style.display = 'block';
    btn2.classList.add('act');
    btn1.classList.remove('act');
}