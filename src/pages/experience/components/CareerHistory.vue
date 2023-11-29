<template>
    <div class="career-history">
        <h1 class="text-center">
            Career History
        </h1>
        <div class="container">
            <div class="row align-items-center pb-3 pt-5">
                <div class="col-5">
                    <h3 class="career-title">Cafe24 Philippines, Inc. — <strong>Junior Web Developer</strong></h3>
                    <p class="year-duration">May 2018 - October 2019</p>
                </div>
                <div class="col-7">
                    <ul class="career-details">
                        <li>
                            Developed both internal and external company projects using Laravel, HTML, CSS, Javascript, jQuery, MariaDB and Redis.
                        </li>
                        <li>
                            Collaborated with the dev team to conduct peer testing.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row align-items-center pb-3">
                <div class="col-5">
                    <h3 class="career-title">Cafe24 Philippines, Inc. — <strong>Senior Web Developer</strong></h3>
                    <p class="year-duration">May 2019 - June 2023</p>
                </div>
                <div class="col-7">
                    <ul class="career-details">
                        <li>
                            Designed and developed e-commerce projects using Web Development Frameworks  such as Laravel, VueJS, and React.
                        </li>
                        <li>
                            Implemented advanced functionalities such as Queuing heavy background tasks such as email and sms sending using Redis.
                        </li>
                        <li>
                            Created a RESTful API while adhering to industry standards, including the implementation of OpenAPI 2.0.
                        </li>
                        <li>
                            Perform code review to team members to ensure the quality of their code and make sure they follow the company's standard
                        </li>
                        <li>
                            Collaborating closely with cross-functional teams, including product manager, publishing, DevOps, and QA, to drive successful project outcomes.
                        </li>
                        <li>
                            Mentoring and developing team members to build a high-performing, collaborative, and engaged team culture
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row align-items-center pb-3">
                <div class="col-5">
                    <h3 class="career-title">Intellect Philippines Branch Office — <strong>Senior Software Developer</strong></h3>
                    <p class="year-duration">September 2023 - Present</p>
                </div>
                <div class="col-7">
                    <ul class="career-details">
                        <li>
                            Develop Web Applications to address the unique requirements of diverse government agencies and sectors in Singapore.
                        </li>
                        <li>
                            Utilize a robust tech stack, including Laravel, React, and PostgreSQL, with proficiency in AWS services such as S3 bucket, CodeCommit, and CodeDeploy.
                        </li>
                        <li>
                            Spearhead the planning and implementation of new functionalities, providing valuable insights to enhance project efficiency and deliverables.
                        </li>
                        <li>
                            Manage deployment processes and oversee database transactions on our server, ensuring a seamless and secure operational environment.
                        </li>
                        <li>
                            Mentor junior developers to foster skill development and ensure project continuity. Act as a go-to resource for colleagues seeking technical guidance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CareerHistory'
    }
</script>

<style scoped>
    .career-history h1 {
        font-weight: 800;
        color: #D3DFE1;
    }
    .career-title, .career-details {
        color: #D3DFE1;
    }

    .year-duration {
        color: #68797B;
    }

</style>