<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('careers')->insert([[
                    'name' => 'Software Engineer at FourPoint.Zero Inc.',
                    'description' => 'Created 3 websites in WordPress for clients. ● Helping and maintaining some old client projects ● Started and worked on a product app in Laravel and Rest APIs for 1 year ● Created a 1-week landing page with downloading and counter feature. ● Maintaining host websites',
                    'reason_target_date' => '2016-07-01',
                    'completed_date' => '2018-04-30',
                    'category' => 'Work Exp',
                ],
                [
                    'name' => 'Freelance Web Developer',
                    'description' => 'Maintaining and upgrading the website ● Also creates apps for self-convenience ● Hosting websites',
                    'reason_target_date' => '2016-05-15',
                    'completed_date' => '2019-12-31',
                    'category' => 'Work Exp',
                ],
                [
                    'name' => 'Web Developer at Octal Phils Inc.',
                    'description' => 'Maintain Client’s Admin Web App. ● Debugging and recalculating data. ● Create new pages. ● Update Deprecated functions. ● Adding new functions.',
                    'reason_target_date' => '2021-04-01',
                    'completed_date' => '2022-08-31',
                    'category' => 'Work Exp',
                ],
                [
                    'name' => 'App/Cloud Support Analyst at Accenture',
                    'description' => 'Maintain and support client’s Cloud Environment. ● Update Applications. ● Adding users.',
                    'reason_target_date' => '2022-10-17',
                    'completed_date' => '2023-03-15',
                    'category' => 'Work Exp',
                ],
                [
                    'name' => 'E-rockwell',
                    'description' => 'e-rockwell.com \n WordPress 2016 \n Company Project \n Upgrade and maintain',
                    'reason_target_date' => '2016-10-01',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'Betiche',
                    'description' => 'betiche.nl \n WordPress \n Company Solo Project \n Website develop',
                    'reason_target_date' => '2016-11-01',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'RG Events',
                    'description' => 'rgevents.php \n WordPress \n Company Solo Project \n Website develop',
                    'reason_target_date' => '2017-02-01',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'Talk Personal',
                    'description' => 'talkpersonalgrowth.com \n WordPress \n Freelance Project \n Upgrade Website',
                    'reason_target_date' => '2017-05-01',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'EntrepZone',
                    'description' => 'enterepzone.com \n Laravel \n Company Project \n Upgrade Website',
                    'reason_target_date' => '2016-09-15',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'iTOOhL',
                    'description' => 'itoohl.com \n Laravel \n Company Project \n Create and Upgrade',
                    'reason_target_date' => '2023-10-15',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'JustPayTo',
                    'description' => 'justpayto.com \n Laravel, REST APIs \n Company Project \n Create and upgrade',
                    'reason_target_date' => '2017-03-01',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'Ordering System',
                    'description' => 'https://sites.google.com/view /ordering-system-with-qrcode/home \n Laravel, REST APIs \n Thesis',
                    'reason_target_date' => '2019-01-14',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'Odyssey',
                    'description' => 'Odyssey \n Laravel and Wordpress \n Freelance Project \n Create and upgrade',
                    'reason_target_date' => '2019-09-09',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'Angat Buhay',
                    'description' => 'Angat Buhay \n Laravel and VueJS \n Freelance \n Web App Development',
                    'reason_target_date' => '2019-12-09',
                    'completed_date' => null,
                    'category' => 'Projects',
                ],
                [
                    'name' => 'COLLEGE: Arellano University Plaridel Campus',
                    'description' => 'Bachelor of Science in Information Technology',
                    'reason_target_date' => '2018-06-04',
                    'completed_date' => '2021-04-30',
                    'category' => 'Education',
                ],
                [
                    'name' => 'COLLEGE: Asian Institute for Computer Studies Bicutan Branch',
                    'description' => 'Associate Degree in Computer Science',
                    'reason_target_date' => '2014-06-09',
                    'completed_date' => '2016-04-29',
                    'category' => 'Education',
                ],
                [
                    'name' => 'SECONDARY: Sen. Renato Companero Cayetano Memorial Science and Technology High School',
                    'description' => 'High School Grad',
                    'reason_target_date' => '2010-06-07',
                    'completed_date' => '2016-04-04',
                    'category' => 'Education',
                ]]
        );

    }
}
