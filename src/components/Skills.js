import "./Skills.css";
import html from '../images/html.png'; 


const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">MY SKILLS</h2>
      <p className="skills-subtitle">Technologies I’ve been working with recently</p>
      <div className="skills-grid">
        <div className="skill-item"><img src= {html} alt="HTML" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/mglfu_675N11DBczte8uXHVrAVagq0a0CAXTFbHbdwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzLzdqMzUz/djh4ZTFoODYxdWM1/aTUzLnBuZw" alt="CSS" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/1dSdxU2GDlGcxnbNSj_iU83ak0hLBbK9e5btboQV8gI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L1Vub2ZmaWNp/YWxfSmF2YVNjcmlw/dF9sb2dvXzIuc3Zn" alt="JavaScript" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" alt="React" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/QlI3VhMNt8Zz9vPnBVV5FeBBvMC6Af5jOgRFEfz3_jw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMTAvUHl0aG9u/X2xvZ29faWNvbi03/MDB4Njk3LnBuZw" alt="Python" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/TC4R7mLgjO2ZPOLBKROQsPlt-c2NQWhwb6gp_QwdyOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0lTT19DKytf/TG9nby5zdmc" alt="C++" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/C-JcggwvoTBgmHI6wPbdjJlxluHcxRO3otaaHVj3NDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMS0z/MTIxNTVfYy1wcm9n/cmFtbWluZy1sYW5n/dWFnZS1sb2dvLWhk/LXBuZy1kb3dubG9h/ZC5wbmc" alt="C" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/w5LFW4ei3PC6DUOkw2jcpG1OVDzoYhDqENlECFBWUg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc" alt="Git" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/Cw7Uw4d-7CL2cDKMniS2oWCf59xdnLFUi1BXIibyguY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn" alt="Superhero Icon" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/linDLuCrb1B71Jtl1QP-3vAdm7VNtPqEZWlf2RStp44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2IyL0Jvb3RzdHJh/cF9sb2dvLnN2Zw" alt="Bootstrap" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/sX5ITwyUAAaa771tKxohaD32e90HfBp3wJ1flHrii_w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXZpc3VhbC1zdHVk/aW8tY29kZS1sb2dv/LWljb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS12cy1l/ZGl0b3JlLWNvZGlu/Zy1icmFuZC1maWxs/ZWQtbGluZS1wYWNr/LWxvZ29zLWljb25z/LTI3MjQ2NTAucG5n/P2Y9d2VicCZ3PTI1/Ng" alt="VS Code" /></div>
        <div className="skill-item"><img src="https://imgs.search.brave.com/mfk7yVuwmjU2_ssXHi6kuRK8eIYkStx3jKLIiC6s21U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9t/eXNxbC1ibGFjay1s/b2dvLXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtNzAxNzUxNjk0/NzcxNzg0MG84bWZu/bGZ6bS5wbmc"  /></div>
      </div>
    </div>
  );
};

export default Skills;
