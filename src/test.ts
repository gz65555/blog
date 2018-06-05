/**
 * Created by husong on 04/06/2018.
 */
import * as template from 'art-template';
template('/welcome.art', 'hi, <%=value%>.');

// use
const view = require('/Users/husong/Documents/svnProject/js/blog/views/article.art');
console.log(view())