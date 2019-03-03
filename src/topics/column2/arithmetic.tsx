import React from "react";
import { Topic } from "../../components/topic";

const comment = (
    <table className="table">
        <tr>
            <th />
            <th>Name</th>
            <th>Description</th>
        </tr>

        <tr>
            <td>
                <code>+</code>
            </td>
            <td>Addition</td>
            <td>Can be used on both scalars and arrays of the same size</td>
        </tr>

        <tr>
            <td>
                <code>-</code>
            </td>
            <td>Subtraction</td>
            <td>Can be used on both scalars and arrays of the same size</td>
        </tr>
        <tr>
            <td>
                <code>*</code>
            </td>
            <td>Multiplication</td>
            <td className="narrow">
                Can be used to multiply arrays by scalars or to take the inner product between two arrays.
            </td>
        </tr>
        <tr>
            <td>
                <code>/</code>
            </td>
            <td>Division</td>
            <td className="narrow">
                Can be used on scalars. Can also be used with arrays as long as the denominator is a scalar.
            </td>
        </tr>
        <tr>
            <td>
                <code>.+ .- .* ./</code>
            </td>
            <td>
                Element-wise
                <br />
                Versions
            </td>
            <td className="narrow">
                When applied to arrays (of the same size), these operators perform their operation between scalars at
                matching positions in each array.
            </td>
        </tr>
    </table>
);
export const arithmeticOperators = (
    <Topic title="Arithmetic Operators">
        <Topic.Item
            title={
                <b>
                    <code>+ - * / .+ .- .* ./</code>
                </b>
            }
            comment={comment}
        />
    </Topic>
);