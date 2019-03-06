import React from "react";
import { Topic, TopicProps } from "../../components/topic";

const orecord = (
    <table className="table">
    <tr>
      <th>What's an <code><b>operator record</b></code>?</th>
    </tr>
    <tr>
      <td>
        <p>
      An <code><b>operator record</b></code> is like an
      ordinary <code><b>record</b></code> except that it is
      possible to define custom behavior for operators
      like <code>+</code>, <code>-</code>, etc.  For more details,
      see <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=167" target="_blank">&sect;14</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th>
        Canonical Syntax
      </th>
    </tr>
    <tr>
      <td>
        <code><b>operator record</b> <code className="typename">Complex</code><br/>
      &nbsp;&nbsp;<code className="typename">Real</code> re;<br/>
      &nbsp;&nbsp;<code className="typename">Real</code> im;<br/>
      &nbsp;&nbsp;...<br/>
      <code className="comment">
        &nbsp;&nbsp;// Definition of <b>operator function</b>s<br/>
        &nbsp;&nbsp;// <b>operator</b>s<br/></code>
      <b>end</b> <code className="typename">Complex</code>;
        </code>
      </td>
    </tr>
  </table>
);
const ofunction = (
    <table className="table">
	  <tr>
	    <th colSpan={2}>What's an <code><b>operator function</b></code>?</th>
	  </tr>
	  <tr>
	    <td colSpan={2}>
	      <p>
		An <code><b>operator function</b></code> is a function
		that implements an operator for an <code><b>operator
		record</b></code>.
	      </p>
	    </td>
	  </tr>
	  <tr>
	    <th colSpan={2}>Possible Operators</th>
	  </tr>
	  <tr>
	    <td>Constructors (see <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=168" target="_blank">&sect;14.2</a>):</td>
	    <td><code>constructor</code>, <code>0</code></td>
	  </tr>
	  <tr>
	    <td>Conversions (see <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=169" target="_blank">&sect;14.3</a>):</td>
	    <td><code>String</code></td>
	  </tr>
	  <tr>
	    <td>Binary Operators (see <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=169" target="_blank">&sect;14.4</a>):</td>
	    <td>
	      
<code className="op">+</code>
 , 
<code className="op">-</code>
, 
<code className="op">*</code>
, 
<code className="op">/</code>
,
	      
<code className="op">^</code>
, 
<code className="op">==</code>
, <br/> 
<code className="op">&lt;&gt;</code>
,
	      
<code className="op">&gt;</code>
, 
<code className="op">&lt;</code>
, 
<code className="op">&gt;=</code>
,
	      
<code className="op">&lt;=</code>
, 
<code className="op"><b>and</b></code>
, 
<code className="op"><b>or</b></code>

	    </td>
	  </tr>
	  <tr>
	    <td>Unary Operators (see <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=170" target="_blank">&sect;14.5</a>):</td>
	    <td> 
<code className="op">-</code>
, 
<code className="op"><b>not</b></code>
</td>
	  </tr>
	  <tr>
	    <th colSpan={2}>Examples</th>
	  </tr>
	  <tr>
	    <td colSpan={2}>
	      <code><b>encapsulated operator function</b> '+'<br/>
		&nbsp;&nbsp;<b>import</b> <span className="typename">Complex</span>;<br/>
		&nbsp;&nbsp;<b>input</b> <span className="typename">Complex</span>
		c1;<br/>
		&nbsp;&nbsp;<b>input</b> <span className="typename">Complex</span>
		c2;<br/>
		&nbsp;&nbsp;<b>output</b> <span className="typename">Complex</span>
		result;<br/>
		<b>algorithm</b><br/>
		&nbsp;&nbsp;result
		:= <span className="typename">Complex</span>(c1.re+c2.re,
		c1.im+c2.im);<br/>
		&nbsp;&nbsp;<b>annotation</b>(Inline=<b>true</b>);<br/>
		<b>end</b> '+';<br/></code>
	    </td>
	  </tr>
	</table>

);
const operator = (
	<table className="table">
	  <tr>
	    <th>What's an <code><b>operator</b></code>?</th>
	  </tr>
	  <tr>
	    <td>
	      <p>
		When an <code><b>operator record</b></code> requires more
		than one implementation of a given operator,
		e.g., <code>'+'</code>, a special type
		of <code><b>package</b></code> called
		an <code><b>operator</b></code> is created with the name
		of the overloaded operator.
		This <code><b>operator</b></code> "package" includes all
		the various implementations of the operator.
	      </p>
	    </td>
	  </tr>
	  <tr>
	    <th>Example</th>
	  </tr>
	  <tr>
	    <td>
	      <code>
		<b>enscapsulated operator</b> '-'<br/>
		&nbsp;&nbsp;<code><b>import</b></code> <code className="typename">Complex</code>;<br/>
		&nbsp;&nbsp;<code><b>function</b></code> <code className="typename">negate</code><br/>
		&nbsp;&nbsp;&nbsp&nbsp;<code><b>input</b></code> <code className="typename">Complex</code> c;<br/>
		&nbsp;&nbsp;&nbsp&nbsp;<code><b>output</b></code> <code className="typename">Complex</code> result;<br/>
		&nbsp;&nbsp;<code><b>algorithm</b></code><br/>
		&nbsp;&nbsp;&nbsp;&nbsp;result := <code className="typename">Complex</code>(-c.re, -c.im);<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<code><b>annotation</b></code>(Inline=<code><b>true</b></code>);<br/>
		&nbsp;&nbsp;<code><b>end</b></code> <code className="typename">negate</code>;<br/>
		<br/>

		&nbsp;&nbsp;<code><b>function</b></code> <code className="typename">subtract</code><br/>
		&nbsp;&nbsp;&nbsp&nbsp;<code><b>input</b></code> <code className="typename">Complex</code> c1;<br/>
		&nbsp;&nbsp;&nbsp&nbsp;<code><b>input</b></code> <code className="typename">Complex</code> c2;<br/>
		&nbsp;&nbsp;&nbsp&nbsp;<code><b>output</b></code> <code className="typename">Complex</code> result;<br/>
		&nbsp;&nbsp;<code><b>algorithm</b></code><br/>
		&nbsp;&nbsp;&nbsp;&nbsp;result := <code className="typename">Complex</code>(c1.re-c2.re, c1.im-c2.im);<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;<code><b>annotation</b></code>(Inline=<code><b>true</b></code>);<br/>
		&nbsp;&nbsp;<code><b>end</b></code> <code className="typename">subtract</code>;<br/>
		<b>end</b> '-';
	      </code>
	    </td>
	  </tr>
	</table>

);

const data: TopicProps = {
    title: "Operator Overloading",
    warning: (<p>
	Operator overloading is a complex topic and is covered in
	detail in <a href="https://www.modelica.org/documents/ModelicaSpec33.pdf#page=167" target="_blank">&sect;14</a>
    </p>),
    items: [
        {
            title: <code>operator record</code>,
            example: orecord,
        },
        {
            title: <code>operator function</code>,
            example: ofunction,
            warning: 	(<div className="footnote">
            <b>Note:</b> An <code><b>operator function</b></code> should
            be encapsulated.
          </div>)
      
        },
        {
            title: <code>operator</code>,
            example: operator,
            warning: (
                <span>	  <b>Note:</b> An <code><b>operator</b></code> should
                be encapsulated.
          </span>
            )
        },
    ],
};

export const operatorOperator = <Topic {...data} />;
