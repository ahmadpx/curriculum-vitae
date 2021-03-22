import styled from "styled-components";
import { experience } from "./data";
import SectionTitle from "../SectionTitle";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Company = styled.article`
  margin-bottom: 10px;
  border-bottom: 1px dashed #e0e0e0;
`;
const CompanyTitle = styled.div`
  display: flex;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 15px;

  a {
    &,
    &:visited,
    &:active {
      color: #04a0ca;
      text-decoration: none;
      margin-right: 5px;

      &:after {
        content: " , ";
      }

      &:last-of-type {
        margin-right: 0;
        &:after {
          content: none;
        }
      }
    }
  }
`;
const Summary = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
const Role = styled.div`
  margin-bottom: 20px;
`;
const RoleTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;
  margin: 0 0 20px;
`;
const RolePeriod = styled.div`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;

function Experience() {
  return (
    <Wrapper>
      <SectionTitle align={"left"}>PROFESSIONAL EXPERIENCE</SectionTitle>

      {experience.map(({ company, brands, titles }) => (
        <Company key={company}>
          <CompanyTitle>
            {brands.length === 0 && company}
            {brands.length === 1 && (
              <a href={brands[0].url}>{brands[0].title}</a>
            )}
            {brands.length > 1 && (
              <>
                {company} (
                {brands.map((brand) =>
                  brand.url ? (
                    <a key={brand.title} href={brand.url}>
                      {brand.title}
                    </a>
                  ) : (
                    brand.title
                  )
                )}
                )
              </>
            )}
          </CompanyTitle>

          {titles.map(({ title, period, responsibilities }) => (
            <Role key={title}>
              <RoleTitle>
                <span>{title}</span>
                <RolePeriod>{period}</RolePeriod>
              </RoleTitle>

              <Summary>{responsibilities}</Summary>
            </Role>
          ))}
        </Company>
      ))}
    </Wrapper>
  );
}

export default Experience;
