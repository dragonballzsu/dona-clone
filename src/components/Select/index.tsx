import React, { useContext, useRef } from "react";

import { Context } from "../../context/ContextProvider";

import { CategoryProps } from "../Category";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import checkIcon from "../../assets/checkIcon.svg";

import SelectStyles from "./styles";

interface SelectProps {
  isSelectingCategory: boolean;
  setIsSelectingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  category: CategoryProps;
  setCategory: React.Dispatch<React.SetStateAction<CategoryProps>>;
}

function Select({ isSelectingCategory, setIsSelectingCategory, category, setCategory }: SelectProps) {
  const { categories } = useContext(Context);

  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => setIsSelectingCategory(false));

  return (
    <SelectStyles isSelectingCategory={isSelectingCategory} ref={wrapperRef}>
      {isSelectingCategory && (
        <ul>
          {categories.map((item) => (
            <li key={item.slug} onClick={() => setCategory(item)}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="1.25"
                  y="1.25"
                  width="12.5"
                  height="12.5"
                  rx="4.75"
                  stroke={`#${item.color}`}
                  strokeWidth="2.5"
                />
              </svg>
              <h4>{item.title}</h4>
              {category.slug === item.slug && <img src={checkIcon} alt="Chosen Category" width={10} id="checkmark" />}
            </li>
          ))}
        </ul>
      )}
    </SelectStyles>
  );
}

export default Select;
