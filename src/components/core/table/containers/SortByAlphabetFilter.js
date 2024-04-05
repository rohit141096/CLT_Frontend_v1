import React from 'react'
import { constants } from '../../../../constants'

const SortByAlphabetFilter = ({ selected, alphabetChanged }) => {
    return (
        <div className="filterByAlphabet">
            <div className="filterByAlphabetInner">
                {
                    constants.alphabets.map((alpha, i) => {
                        return (
                            <div className={`filterByAlphabetSingle ${alpha === selected ? "active" : ""}`} key={i} onClick={() => alphabetChanged(alpha)}>
                                <p className="filterByAlphabetSingleTxt">{alpha}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SortByAlphabetFilter