import './common.css';
import {skillData} from '../../data';

const Skill = () => {
  return (
    <section>
      <div className="maincontent">
      <div>
      <h2 className="skills">Skills</h2>
      </div>
      <hr/>
      <div className="row row-cols-3">
      {skillData.map((skills)=>{
        return (
          <figure className="col" key={skills.id}>
                      {skills.skill}
            <figcaption>{skills.name}</figcaption>
           </figure>
          )
        })}
      </div>
      </div>

    </section>
  )
}

export default Skill;
