
import React,{Component} from "react";
import "./es6Tutorial.css";


class Es6Tutorials extends Component{
    constructor(props){
        super(props);
        this.state={
        
          }
    }



  render() {

      return (
          <div>
              <h2>ES6 Features</h2>
              <h2 id="arrow-functions">Arrow Functions</h2>
<p>A short hand notation for <code>function()</code>, but it does not bind <code>this</code> in the same way.</p>
<pre><code class="lang-javascript">no-eval
var odds = evens.map(v =&gt; v + 1);  // no parentes and no brackets
var nums = evens.map((v, i) =&gt; v + i);

</code></pre>
          </div>
      )
   }

}
export default Es6Tutorials;
