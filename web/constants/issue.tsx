import DatePickerTable from '@/components/module/datePickerTable';
import SelectLabels from '@/components/module/selectLabels';
import SelectMember from '@/components/module/selectMember';
import SelectState from '@/components/module/selectState';
import Select, { IOptionItem } from '@/components/ui/select/select';
import { ITableConfigs } from '@/components/ui/table';
import issueService from '@/services/issue-services';
import { IIssue, IUser, IState, ILabel } from '@/types';
import { LinkProps } from 'next/link';
import { CiViewList } from 'react-icons/ci';
import { IoBan } from 'react-icons/io5';
import { LiaThListSolid } from 'react-icons/lia';
import {
  MdCalendarMonth,
  MdOutlineSignalCellularAlt,
  MdOutlineSignalCellularAlt2Bar,
  MdOutlineViewKanban,
  MdSignalCellularAlt1Bar,
} from 'react-icons/md';
import { RiErrorWarningLine } from 'react-icons/ri';
import moment from 'moment';
import { ReactElement } from 'react';
import SelectEstimate from '@/components/module/selectEstimate';

export interface ILink {
  title: string;
  key: string;
}

export const END_DATE_QUERY = 'dueDate';
export const STATE_QUERY = 'states';
export const TYPE_DATE_QUERY = 'typeDateQuery';

export const TIME_ZONE_CHOICE = [
  'Africa/Abidjan, GMT',
  'Africa/Accra, GMT',
  'Africa/Addis_Ababa, GMT+03:00',
  'Africa/Algiers, GMT+01:00',
  'Africa/Asmara, GMT+03:00',
  'Africa/Asmera, GMT+03:00',
  'Africa/Bamako, GMT',
  'Africa/Bangui, GMT+01:00',
  'Africa/Banjul, GMT',
  'Africa/Bissau, GMT',
  'Africa/Blantyre, GMT+02:00',
  'Africa/Brazzaville, GMT+01:00',
  'Africa/Bujumbura, GMT+02:00',
  'Africa/Cairo, GMT+03:00',
  'Africa/Casablanca, GMT+01:00',
  'Africa/Ceuta, GMT+02:00',
  'Africa/Conakry, GMT',
  'Africa/Dakar, GMT',
  'Africa/Dar_es_Salaam, GMT+03:00',
  'Africa/Djibouti, GMT+03:00',
  'Africa/Douala, GMT+01:00',
  'Africa/El_Aaiun, GMT+01:00',
  'Africa/Freetown, GMT',
  'Africa/Gaborone, GMT+02:00',
  'Africa/Harare, GMT+02:00',
  'Africa/Johannesburg, GMT+02:00',
  'Africa/Juba, GMT+02:00',
  'Africa/Kampala, GMT+03:00',
  'Africa/Khartoum, GMT+02:00',
  'Africa/Kigali, GMT+02:00',
  'Africa/Kinshasa, GMT+01:00',
  'Africa/Lagos, GMT+01:00',
  'Africa/Libreville, GMT+01:00',
  'Africa/Lome, GMT',
  'Africa/Luanda, GMT+01:00',
  'Africa/Lubumbashi, GMT+02:00',
  'Africa/Lusaka, GMT+02:00',
  'Africa/Malabo, GMT+01:00',
  'Africa/Maputo, GMT+02:00',
  'Africa/Maseru, GMT+02:00',
  'Africa/Mbabane, GMT+02:00',
  'Africa/Mogadishu, GMT+03:00',
  'Africa/Monrovia, GMT',
  'Africa/Nairobi, GMT+03:00',
  'Africa/Ndjamena, GMT+01:00',
  'Africa/Niamey, GMT+01:00',
  'Africa/Nouakchott, GMT',
  'Africa/Ouagadougou, GMT',
  'Africa/Porto-Novo, GMT+01:00',
  'Africa/Sao_Tome, GMT',
  'Africa/Timbuktu, GMT',
  'Africa/Tripoli, GMT+02:00',
  'Africa/Tunis, GMT+01:00',
  'Africa/Windhoek, GMT+02:00',
  'America/Adak, GMT-09:00',
  'America/Anchorage, GMT-08:00',
  'America/Anguilla, GMT-04:00',
  'America/Antigua, GMT-04:00',
  'America/Araguaina, GMT-03:00',
  'America/Argentina/Buenos_Aires, GMT-03:00',
  'America/Argentina/Catamarca, GMT-03:00',
  'America/Argentina/ComodRivadavia, GMT-03:00',
  'America/Argentina/Cordoba, GMT-03:00',
  'America/Argentina/Jujuy, GMT-03:00',
  'America/Argentina/La_Rioja, GMT-03:00',
  'America/Argentina/Mendoza, GMT-03:00',
  'America/Argentina/Rio_Gallegos, GMT-03:00',
  'America/Argentina/Salta, GMT-03:00',
  'America/Argentina/San_Juan, GMT-03:00',
  'America/Argentina/San_Luis, GMT-03:00',
  'America/Argentina/Tucuman, GMT-03:00',
  'America/Argentina/Ushuaia, GMT-03:00',
  'America/Aruba, GMT-04:00',
  'America/Asuncion, GMT-04:00',
  'America/Atikokan, GMT-05:00',
  'America/Atka, GMT-09:00',
  'America/Bahia, GMT-03:00',
  'America/Bahia_Banderas, GMT-06:00',
  'America/Barbados, GMT-04:00',
  'America/Belem, GMT-03:00',
  'America/Belize, GMT-06:00',
  'America/Blanc-Sablon, GMT-04:00',
  'America/Boa_Vista, GMT-04:00',
  'America/Bogota, GMT-05:00',
  'America/Boise, GMT-06:00',
  'America/Buenos_Aires, GMT-03:00',
  'America/Cambridge_Bay, GMT-06:00',
  'America/Campo_Grande, GMT-04:00',
  'America/Cancun, GMT-05:00',
  'America/Caracas, GMT-04:00',
  'America/Catamarca, GMT-03:00',
  'America/Cayenne, GMT-03:00',
  'America/Cayman, GMT-05:00',
  'America/Chicago, GMT-05:00',
  'America/Chihuahua, GMT-06:00',
  'America/Ciudad_Juarez, GMT-06:00',
  'America/Coral_Harbour, GMT-05:00',
  'America/Cordoba, GMT-03:00',
  'America/Costa_Rica, GMT-06:00',
  'America/Creston, GMT-07:00',
  'America/Cuiaba, GMT-04:00',
  'America/Curacao, GMT-04:00',
  'America/Danmarkshavn, GMT',
  'America/Dawson, GMT-07:00',
  'America/Dawson_Creek, GMT-07:00',
  'America/Denver, GMT-06:00',
  'America/Detroit, GMT-04:00',
  'America/Dominica, GMT-04:00',
  'America/Edmonton, GMT-06:00',
  'America/Eirunepe, GMT-05:00',
  'America/El_Salvador, GMT-06:00',
  'America/Ensenada, GMT-07:00',
  'America/Fort_Nelson, GMT-07:00',
  'America/Fort_Wayne, GMT-04:00',
  'America/Fortaleza, GMT-03:00',
  'America/Glace_Bay, GMT-03:00',
  'America/Godthab, GMT-02:00',
  'America/Goose_Bay, GMT-03:00',
  'America/Grand_Turk, GMT-04:00',
  'America/Grenada, GMT-04:00',
  'America/Guadeloupe, GMT-04:00',
  'America/Guatemala, GMT-06:00',
  'America/Guayaquil, GMT-05:00',
  'America/Guyana, GMT-04:00',
  'America/Halifax, GMT-03:00',
  'America/Havana, GMT-04:00',
  'America/Hermosillo, GMT-07:00',
  'America/Indiana/Indianapolis, GMT-04:00',
  'America/Indiana/Knox, GMT-05:00',
  'America/Indiana/Marengo, GMT-04:00',
  'America/Indiana/Petersburg, GMT-04:00',
  'America/Indiana/Tell_City, GMT-05:00',
  'America/Indiana/Vevay, GMT-04:00',
  'America/Indiana/Vincennes, GMT-04:00',
  'America/Indiana/Winamac, GMT-04:00',
  'America/Indianapolis, GMT-04:00',
  'America/Inuvik, GMT-06:00',
  'America/Iqaluit, GMT-04:00',
  'America/Jamaica, GMT-05:00',
  'America/Jujuy, GMT-03:00',
  'America/Juneau, GMT-08:00',
  'America/Kentucky/Louisville, GMT-04:00',
  'America/Kentucky/Monticello, GMT-04:00',
  'America/Knox_IN, GMT-05:00',
  'America/Kralendijk, GMT-04:00',
  'America/La_Paz, GMT-04:00',
  'America/Lima, GMT-05:00',
  'America/Los_Angeles, GMT-07:00',
  'America/Louisville, GMT-04:00',
  'America/Lower_Princes, GMT-04:00',
  'America/Maceio, GMT-03:00',
  'America/Managua, GMT-06:00',
  'America/Manaus, GMT-04:00',
  'America/Marigot, GMT-04:00',
  'America/Martinique, GMT-04:00',
  'America/Matamoros, GMT-05:00',
  'America/Mazatlan, GMT-07:00',
  'America/Mendoza, GMT-03:00',
  'America/Menominee, GMT-05:00',
  'America/Merida, GMT-06:00',
  'America/Metlakatla, GMT-08:00',
  'America/Mexico_City, GMT-06:00',
  'America/Miquelon, GMT-02:00',
  'America/Moncton, GMT-03:00',
  'America/Monterrey, GMT-06:00',
  'America/Montevideo, GMT-03:00',
  'America/Montreal, GMT-04:00',
  'America/Montserrat, GMT-04:00',
  'America/Nassau, GMT-04:00',
  'America/New_York, GMT-04:00',
  'America/Nipigon, GMT-04:00',
  'America/Nome, GMT-08:00',
  'America/Noronha, GMT-02:00',
  'America/North_Dakota/Beulah, GMT-05:00',
  'America/North_Dakota/Center, GMT-05:00',
  'America/North_Dakota/New_Salem, GMT-05:00',
  'America/Nuuk, GMT-02:00',
  'America/Ojinaga, GMT-05:00',
  'America/Panama, GMT-05:00',
  'America/Pangnirtung, GMT-04:00',
  'America/Paramaribo, GMT-03:00',
  'America/Phoenix, GMT-07:00',
  'America/Port-au-Prince, GMT-04:00',
  'America/Port_of_Spain, GMT-04:00',
  'America/Porto_Acre, GMT-05:00',
  'America/Porto_Velho, GMT-04:00',
  'America/Puerto_Rico, GMT-04:00',
  'America/Punta_Arenas, GMT-03:00',
  'America/Rainy_River, GMT-05:00',
  'America/Rankin_Inlet, GMT-05:00',
  'America/Recife, GMT-03:00',
  'America/Regina, GMT-06:00',
  'America/Resolute, GMT-05:00',
  'America/Rio_Branco, GMT-05:00',
  'America/Rosario, GMT-03:00',
  'America/Santa_Isabel, GMT-07:00',
  'America/Santarem, GMT-03:00',
  'America/Santiago, GMT-04:00',
  'America/Santo_Domingo, GMT-04:00',
  'America/Sao_Paulo, GMT-03:00',
  'America/Scoresbysund, GMT',
  'America/Shiprock, GMT-06:00',
  'America/Sitka, GMT-08:00',
  'America/St_Barthelemy, GMT-04:00',
  'America/St_Johns, GMT-02:30',
  'America/St_Kitts, GMT-04:00',
  'America/St_Lucia, GMT-04:00',
  'America/St_Thomas, GMT-04:00',
  'America/St_Vincent, GMT-04:00',
  'America/Swift_Current, GMT-06:00',
  'America/Tegucigalpa, GMT-06:00',
  'America/Thule, GMT-03:00',
  'America/Thunder_Bay, GMT-04:00',
  'America/Tijuana, GMT-07:00',
  'America/Toronto, GMT-04:00',
  'America/Tortola, GMT-04:00',
  'America/Vancouver, GMT-07:00',
  'America/Virgin, GMT-04:00',
  'America/Whitehorse, GMT-07:00',
  'America/Winnipeg, GMT-05:00',
  'America/Yakutat, GMT-08:00',
  'America/Yellowknife, GMT-06:00',
  'Antarctica/Casey, GMT+11:00',
  'Antarctica/Davis, GMT+07:00',
  'Antarctica/DumontDUrville, GMT+10:00',
  'Antarctica/Macquarie, GMT+10:00',
  'Antarctica/Mawson, GMT+05:00',
  'Antarctica/McMurdo, GMT+12:00',
  'Antarctica/Palmer, GMT-03:00',
  'Antarctica/Rothera, GMT-03:00',
  'Antarctica/South_Pole, GMT+12:00',
  'Antarctica/Syowa, GMT+03:00',
  'Antarctica/Troll, GMT+02:00',
  'Antarctica/Vostok, GMT+06:00',
  'Arctic/Longyearbyen, GMT+02:00',
  'Asia/Aden, GMT+03:00',
  'Asia/Almaty, GMT+06:00',
  'Asia/Amman, GMT+03:00',
  'Asia/Anadyr, GMT+12:00',
  'Asia/Aqtau, GMT+05:00',
  'Asia/Aqtobe, GMT+05:00',
  'Asia/Ashgabat, GMT+05:00',
  'Asia/Ashkhabad, GMT+05:00',
  'Asia/Atyrau, GMT+05:00',
  'Asia/Baghdad, GMT+03:00',
  'Asia/Bahrain, GMT+03:00',
  'Asia/Baku, GMT+04:00',
  'Asia/Bangkok, GMT+07:00',
  'Asia/Barnaul, GMT+07:00',
  'Asia/Beirut, GMT+03:00',
  'Asia/Bishkek, GMT+06:00',
  'Asia/Brunei, GMT+08:00',
  'Asia/Calcutta, GMT+05:30',
  'Asia/Chita, GMT+09:00',
  'Asia/Choibalsan, GMT+08:00',
  'Asia/Chongqing, GMT+08:00',
  'Asia/Chungking, GMT+08:00',
  'Asia/Colombo, GMT+05:30',
  'Asia/Dacca, GMT+06:00',
  'Asia/Damascus, GMT+03:00',
  'Asia/Dhaka, GMT+06:00',
  'Asia/Dili, GMT+09:00',
  'Asia/Dubai, GMT+04:00',
  'Asia/Dushanbe, GMT+05:00',
  'Asia/Famagusta, GMT+03:00',
  'Asia/Gaza, GMT+03:00',
  'Asia/Harbin, GMT+08:00',
  'Asia/Hebron, GMT+03:00',
  'Asia/Ho_Chi_Minh, GMT+07:00',
  'Asia/Hong_Kong, GMT+08:00',
  'Asia/Hovd, GMT+07:00',
  'Asia/Irkutsk, GMT+08:00',
  'Asia/Istanbul, GMT+03:00',
  'Asia/Jakarta, GMT+07:00',
  'Asia/Jayapura, GMT+09:00',
  'Asia/Jerusalem, GMT+03:00',
  'Asia/Kabul, GMT+04:30',
  'Asia/Kamchatka, GMT+12:00',
  'Asia/Karachi, GMT+05:00',
  'Asia/Kashgar, GMT+06:00',
  'Asia/Kathmandu, GMT+05:45',
  'Asia/Katmandu, GMT+05:45',
  'Asia/Khandyga, GMT+09:00',
  'Asia/Kolkata, GMT+05:30',
  'Asia/Krasnoyarsk, GMT+07:00',
  'Asia/Kuala_Lumpur, GMT+08:00',
  'Asia/Kuching, GMT+08:00',
  'Asia/Kuwait, GMT+03:00',
  'Asia/Macao, GMT+08:00',
  'Asia/Macau, GMT+08:00',
  'Asia/Magadan, GMT+11:00',
  'Asia/Makassar, GMT+08:00',
  'Asia/Manila, GMT+08:00',
  'Asia/Muscat, GMT+04:00',
  'Asia/Nicosia, GMT+03:00',
  'Asia/Novokuznetsk, GMT+07:00',
  'Asia/Novosibirsk, GMT+07:00',
  'Asia/Omsk, GMT+06:00',
  'Asia/Oral, GMT+05:00',
  'Asia/Phnom_Penh, GMT+07:00',
  'Asia/Pontianak, GMT+07:00',
  'Asia/Pyongyang, GMT+09:00',
  'Asia/Qatar, GMT+03:00',
  'Asia/Qostanay, GMT+06:00',
  'Asia/Qyzylorda, GMT+05:00',
  'Asia/Rangoon, GMT+06:30',
  'Asia/Riyadh, GMT+03:00',
  'Asia/Saigon, GMT+07:00',
  'Asia/Sakhalin, GMT+11:00',
  'Asia/Samarkand, GMT+05:00',
  'Asia/Seoul, GMT+09:00',
  'Asia/Shanghai, GMT+08:00',
  'Asia/Singapore, GMT+08:00',
  'Asia/Srednekolymsk, GMT+11:00',
  'Asia/Taipei, GMT+08:00',
  'Asia/Tashkent, GMT+05:00',
  'Asia/Tbilisi, GMT+04:00',
  'Asia/Tehran, GMT+03:30',
  'Asia/Tel_Aviv, GMT+03:00',
  'Asia/Thimbu, GMT+06:00',
  'Asia/Thimphu, GMT+06:00',
  'Asia/Tokyo, GMT+09:00',
  'Asia/Tomsk, GMT+07:00',
  'Asia/Ujung_Pandang, GMT+08:00',
  'Asia/Ulaanbaatar, GMT+08:00',
  'Asia/Ulan_Bator, GMT+08:00',
  'Asia/Urumqi, GMT+06:00',
  'Asia/Ust-Nera, GMT+10:00',
  'Asia/Vientiane, GMT+07:00',
  'Asia/Vladivostok, GMT+10:00',
  'Asia/Yakutsk, GMT+09:00',
  'Asia/Yangon, GMT+06:30',
  'Asia/Yekaterinburg, GMT+05:00',
  'Asia/Yerevan, GMT+04:00',
  'Atlantic/Azores, GMT',
  'Atlantic/Bermuda, GMT-03:00',
  'Atlantic/Canary, GMT+01:00',
  'Atlantic/Cape_Verde, GMT-01:00',
  'Atlantic/Faeroe, GMT+01:00',
  'Atlantic/Faroe, GMT+01:00',
  'Atlantic/Jan_Mayen, GMT+02:00',
  'Atlantic/Madeira, GMT+01:00',
  'Atlantic/Reykjavik, GMT',
  'Atlantic/South_Georgia, GMT-02:00',
  'Atlantic/St_Helena, GMT',
  'Atlantic/Stanley, GMT-03:00',
  'Australia/ACT, GMT+10:00',
  'Australia/Adelaide, GMT+09:30',
  'Australia/Brisbane, GMT+10:00',
  'Australia/Broken_Hill, GMT+09:30',
  'Australia/Canberra, GMT+10:00',
  'Australia/Currie, GMT+10:00',
  'Australia/Darwin, GMT+09:30',
  'Australia/Eucla, GMT+08:45',
  'Australia/Hobart, GMT+10:00',
  'Australia/LHI, GMT+10:30',
  'Australia/Lindeman, GMT+10:00',
  'Australia/Lord_Howe, GMT+10:30',
  'Australia/Melbourne, GMT+10:00',
  'Australia/NSW, GMT+10:00',
  'Australia/North, GMT+09:30',
  'Australia/Perth, GMT+08:00',
  'Australia/Queensland, GMT+10:00',
  'Australia/South, GMT+09:30',
  'Australia/Sydney, GMT+10:00',
  'Australia/Tasmania, GMT+10:00',
  'Australia/Victoria, GMT+10:00',
  'Australia/West, GMT+08:00',
  'Australia/Yancowinna, GMT+09:30',
  'Brazil/Acre, GMT-05:00',
  'Brazil/DeNoronha, GMT-02:00',
  'Brazil/East, GMT-03:00',
  'Brazil/West, GMT-04:00',
  'CET, GMT+02:00',
  'CST6CDT, GMT-05:00',
  'Canada/Atlantic, GMT-03:00',
  'Canada/Central, GMT-05:00',
  'Canada/Eastern, GMT-04:00',
  'Canada/Mountain, GMT-06:00',
  'Canada/Newfoundland, GMT-02:30',
  'Canada/Pacific, GMT-07:00',
  'Canada/Saskatchewan, GMT-06:00',
  'Canada/Yukon, GMT-07:00',
  'Chile/Continental, GMT-04:00',
  'Chile/EasterIsland, GMT-06:00',
  'Cuba, GMT-04:00',
  'EET, GMT+03:00',
  'EST, GMT-05:00',
  'EST5EDT, GMT-04:00',
  'Egypt, GMT+03:00',
  'Eire, GMT+01:00',
  'Etc/GMT, GMT',
  'Etc/GMT+0, GMT',
  'Etc/GMT+1, GMT-01:00',
  'Etc/GMT+10, GMT-10:00',
  'Etc/GMT+11, GMT-11:00',
  'Etc/GMT+12, GMT-12:00',
  'Etc/GMT+2, GMT-02:00',
  'Etc/GMT+3, GMT-03:00',
  'Etc/GMT+4, GMT-04:00',
  'Etc/GMT+5, GMT-05:00',
  'Etc/GMT+6, GMT-06:00',
  'Etc/GMT+7, GMT-07:00',
  'Etc/GMT+8, GMT-08:00',
  'Etc/GMT+9, GMT-09:00',
  'Etc/GMT-0, GMT',
  'Etc/GMT-1, GMT+01:00',
  'Etc/GMT-10, GMT+10:00',
  'Etc/GMT-11, GMT+11:00',
  'Etc/GMT-12, GMT+12:00',
  'Etc/GMT-13, GMT+13:00',
  'Etc/GMT-14, GMT+14:00',
  'Etc/GMT-2, GMT+02:00',
  'Etc/GMT-3, GMT+03:00',
  'Etc/GMT-4, GMT+04:00',
  'Etc/GMT-5, GMT+05:00',
  'Etc/GMT-6, GMT+06:00',
  'Etc/GMT-7, GMT+07:00',
  'Etc/GMT-8, GMT+08:00',
  'Etc/GMT-9, GMT+09:00',
  'Etc/GMT0, GMT',
  'Etc/Greenwich, GMT',
  'Etc/UCT, GMT',
  'Etc/UTC, GMT',
  'Etc/Universal, GMT',
  'Etc/Zulu, GMT',
  'Europe/Amsterdam, GMT+02:00',
  'Europe/Andorra, GMT+02:00',
  'Europe/Astrakhan, GMT+04:00',
  'Europe/Athens, GMT+03:00',
  'Europe/Belfast, GMT+01:00',
  'Europe/Belgrade, GMT+02:00',
  'Europe/Berlin, GMT+02:00',
  'Europe/Bratislava, GMT+02:00',
  'Europe/Brussels, GMT+02:00',
  'Europe/Bucharest, GMT+03:00',
  'Europe/Budapest, GMT+02:00',
  'Europe/Busingen, GMT+02:00',
  'Europe/Chisinau, GMT+03:00',
  'Europe/Copenhagen, GMT+02:00',
  'Europe/Dublin, GMT+01:00',
  'Europe/Gibraltar, GMT+02:00',
  'Europe/Guernsey, GMT+01:00',
  'Europe/Helsinki, GMT+03:00',
  'Europe/Isle_of_Man, GMT+01:00',
  'Europe/Istanbul, GMT+03:00',
  'Europe/Jersey, GMT+01:00',
  'Europe/Kaliningrad, GMT+02:00',
  'Europe/Kiev, GMT+03:00',
  'Europe/Kirov, GMT+03:00',
  'Europe/Kyiv, GMT+03:00',
  'Europe/Lisbon, GMT+01:00',
  'Europe/Ljubljana, GMT+02:00',
  'Europe/London, GMT+01:00',
  'Europe/Luxembourg, GMT+02:00',
  'Europe/Madrid, GMT+02:00',
  'Europe/Malta, GMT+02:00',
  'Europe/Mariehamn, GMT+03:00',
  'Europe/Minsk, GMT+03:00',
  'Europe/Monaco, GMT+02:00',
  'Europe/Moscow, GMT+03:00',
  'Europe/Nicosia, GMT+03:00',
  'Europe/Oslo, GMT+02:00',
  'Europe/Paris, GMT+02:00',
  'Europe/Podgorica, GMT+02:00',
  'Europe/Prague, GMT+02:00',
  'Europe/Riga, GMT+03:00',
  'Europe/Rome, GMT+02:00',
  'Europe/Samara, GMT+04:00',
  'Europe/San_Marino, GMT+02:00',
  'Europe/Sarajevo, GMT+02:00',
  'Europe/Saratov, GMT+04:00',
  'Europe/Simferopol, GMT+03:00',
  'Europe/Skopje, GMT+02:00',
  'Europe/Sofia, GMT+03:00',
  'Europe/Stockholm, GMT+02:00',
  'Europe/Tallinn, GMT+03:00',
  'Europe/Tirane, GMT+02:00',
  'Europe/Tiraspol, GMT+03:00',
  'Europe/Ulyanovsk, GMT+04:00',
  'Europe/Uzhgorod, GMT+03:00',
  'Europe/Vaduz, GMT+02:00',
  'Europe/Vatican, GMT+02:00',
  'Europe/Vienna, GMT+02:00',
  'Europe/Vilnius, GMT+03:00',
  'Europe/Volgograd, GMT+03:00',
  'Europe/Warsaw, GMT+02:00',
  'Europe/Zagreb, GMT+02:00',
  'Europe/Zaporozhye, GMT+03:00',
  'Europe/Zurich, GMT+02:00',
  'GB, GMT+01:00',
  'GB-Eire, GMT+01:00',
  'GMT, GMT',
  'GMT+0, GMT',
  'GMT-0, GMT',
  'GMT0, GMT',
  'Greenwich, GMT',
  'HST, GMT-10:00',
  'Hongkong, GMT+08:00',
  'Iceland, GMT',
  'Indian/Antananarivo, GMT+03:00',
  'Indian/Chagos, GMT+06:00',
  'Indian/Christmas, GMT+07:00',
  'Indian/Cocos, GMT+06:30',
  'Indian/Comoro, GMT+03:00',
  'Indian/Kerguelen, GMT+05:00',
  'Indian/Mahe, GMT+04:00',
  'Indian/Maldives, GMT+05:00',
  'Indian/Mauritius, GMT+04:00',
  'Indian/Mayotte, GMT+03:00',
  'Indian/Reunion, GMT+04:00',
  'Iran, GMT+03:30',
  'Israel, GMT+03:00',
  'Jamaica, GMT-05:00',
  'Japan, GMT+09:00',
  'Kwajalein, GMT+12:00',
  'Libya, GMT+02:00',
  'MET, GMT+02:00',
  'MST, GMT-07:00',
  'MST7MDT, GMT-06:00',
  'Mexico/BajaNorte, GMT-07:00',
  'Mexico/BajaSur, GMT-07:00',
  'Mexico/General, GMT-06:00',
  'NZ, GMT+12:00',
  'NZ-CHAT, GMT+12:45',
  'Navajo, GMT-06:00',
  'PRC, GMT+08:00',
  'PST8PDT, GMT-07:00',
  'Pacific/Apia, GMT+13:00',
  'Pacific/Auckland, GMT+12:00',
  'Pacific/Bougainville, GMT+11:00',
  'Pacific/Chatham, GMT+12:45',
  'Pacific/Chuuk, GMT+10:00',
  'Pacific/Easter, GMT-06:00',
  'Pacific/Efate, GMT+11:00',
  'Pacific/Enderbury, GMT+13:00',
  'Pacific/Fakaofo, GMT+13:00',
  'Pacific/Fiji, GMT+12:00',
  'Pacific/Funafuti, GMT+12:00',
  'Pacific/Galapagos, GMT-06:00',
  'Pacific/Gambier, GMT-09:00',
  'Pacific/Guadalcanal, GMT+11:00',
  'Pacific/Guam, GMT+10:00',
  'Pacific/Honolulu, GMT-10:00',
  'Pacific/Johnston, GMT-10:00',
  'Pacific/Kanton, GMT+13:00',
  'Pacific/Kiritimati, GMT+14:00',
  'Pacific/Kosrae, GMT+11:00',
  'Pacific/Kwajalein, GMT+12:00',
  'Pacific/Majuro, GMT+12:00',
  'Pacific/Marquesas, GMT-09:30',
  'Pacific/Midway, GMT-11:00',
  'Pacific/Nauru, GMT+12:00',
  'Pacific/Niue, GMT-11:00',
  'Pacific/Norfolk, GMT+11:00',
  'Pacific/Noumea, GMT+11:00',
  'Pacific/Pago_Pago, GMT-11:00',
  'Pacific/Palau, GMT+09:00',
  'Pacific/Pitcairn, GMT-08:00',
  'Pacific/Pohnpei, GMT+11:00',
  'Pacific/Ponape, GMT+11:00',
  'Pacific/Port_Moresby, GMT+10:00',
  'Pacific/Rarotonga, GMT-10:00',
  'Pacific/Saipan, GMT+10:00',
  'Pacific/Samoa, GMT-11:00',
  'Pacific/Tahiti, GMT-10:00',
  'Pacific/Tarawa, GMT+12:00',
  'Pacific/Tongatapu, GMT+13:00',
  'Pacific/Truk, GMT+10:00',
  'Pacific/Wake, GMT+12:00',
  'Pacific/Wallis, GMT+12:00',
  'Pacific/Yap, GMT+10:00',
  'Poland, GMT+02:00',
  'Portugal, GMT+01:00',
  'ROC, GMT+08:00',
  'ROK, GMT+09:00',
  'Singapore, GMT+08:00',
  'Turkey, GMT+03:00',
  'UCT, GMT',
  'US/Alaska, GMT-08:00',
  'US/Aleutian, GMT-09:00',
  'US/Arizona, GMT-07:00',
  'US/Central, GMT-05:00',
  'US/East-Indiana, GMT-04:00',
  'US/Eastern, GMT-04:00',
  'US/Hawaii, GMT-10:00',
  'US/Indiana-Starke, GMT-05:00',
  'US/Michigan, GMT-04:00',
  'US/Mountain, GMT-06:00',
  'US/Pacific, GMT-07:00',
  'US/Samoa, GMT-11:00',
  'UTC, GMT',
  'Universal, GMT',
  'W-SU, GMT+03:00',
  'WET, GMT+01:00',
  'Zulu, GMT',
];

export const ORGANIZATION_SIZE = [
  'Jus myself',
  '2-10',
  '11-50',
  '51-200',
  '201-500',
  '5000+',
];

export const MEMBER_ROLE = ['Guest', 'Viewer', 'Member', 'Admin'];

export const LS_KEY_STATE: { [key: string]: string } = {
  backlog: 'Backlog',
  unstarted: 'Unstarted',
  started: 'Started',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

export const MEMBER_ROLE_KEY = {
  5: 'Guest',
  10: 'Viewer',
  15: 'Member',
  20: 'Admin',
  25: 'Admin',
};

export const optionLevel: IOptionItem[] = [
  { icon: <RiErrorWarningLine />, title: 'Urgent', value: 'urgent' },
  { icon: <MdOutlineSignalCellularAlt />, title: 'High', value: 'high' },
  {
    icon: <MdOutlineSignalCellularAlt2Bar />,
    title: 'Medium',
    value: 'medium',
  },
  { icon: <MdSignalCellularAlt1Bar />, title: 'Low', value: 'low' },
  { icon: <IoBan />, title: 'None', value: 'none' },
];

export const optionLevelIcons: { [e: string]: ReactElement } = {
  urgent: <RiErrorWarningLine />,
  high: <MdOutlineSignalCellularAlt />,
  medium: <MdOutlineSignalCellularAlt2Bar />,
  low: <MdSignalCellularAlt1Bar />,
  none: <IoBan />,
};

export const lsDefaultTabsIssue = [
  <div
    key={'lsMenu1'}
    className="text-base font-medium px-3 whitespace-nowrap w-fit"
  >
    All issue
  </div>,
  <div
    key={'lsMenu2'}
    className="text-base font-medium px-3 whitespace-nowrap w-fit"
  >
    Assigned
  </div>,
  <div
    key={'lsMenu3'}
    className="text-base font-medium px-3 whitespace-nowrap w-fit"
  >
    Created
  </div>,
  <div
    key={'lsMenu4'}
    className="text-base font-medium px-3 whitespace-nowrap w-fit"
  >
    Subscribed
  </div>,
];

export const lsTabsIssues: ILink[] = [
  { title: 'All issue', key: 'all-issues' },
  { title: 'Assigned', key: 'assigned' },
  { title: 'Created', key: 'created' },
  { title: 'Subscribed', key: 'subscribed' },
];

export function getDeFaultTabs(workspacSlug?: string): LinkProps[] {
  return workspacSlug
    ? lsTabsIssues.map((e) => ({
        title: e.title,
        href: `/${workspacSlug}/workspace-views/${e.key}`,
      }))
    : [];
}

export const menuLayoutIssue = [
  {
    icon: <CiViewList />,
    key: 'list',
  },
  {
    icon: <MdOutlineViewKanban />,
    key: 'kanban',
  },
  {
    icon: <MdCalendarMonth />,
    key: 'calendar',
  },
  // {
  //     icon: <LuGanttChartSquare />,
  //     key: 'gantt',
  // },
  {
    icon: <LiaThListSolid />,
    key: 'spreadsheet',
  },
];

export const DATE_FORMAT = 'MMMM Do, h:mm:ss a';

export const TableConfigs: ITableConfigs[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    fixed: 'left',
    render: (_, record: IIssue) => {
      const id =
        record?.project?.identifier?.toUpperCase() +
        '-' +
        (record.sequence_id || '');
      return (
        <div title={id} className="nowrap w-full overflow-hidden text-ellipsis">
          {id}
        </div>
      );
    },
  },
  {
    title: 'Issue',
    dataIndex: 'name',
    fixed: 'left',
    width: 300,
    shadow: 'left',
  },
  {
    title: 'State',
    dataIndex: 'state_id',
    render: (stateId, item: IState) => (
      <SelectState
        projectId={item.project_id}
        stateId={stateId?.toString()}
        beforeUpdateValue={(e) =>
          issueService.updateIssue(item.id, {
            state_id: e as string,
          })
        }
      />
    ),
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    render: (priority, item: IState) => {
      return (
        <Select
          options={optionLevel}
          defaultValue={priority}
          isIconCheck
          fontSize="text-[12px]"
          beforeUpdateValue={(change) => {
            return issueService.updateIssue(item.id, {
              priority: change as string,
            });
          }}
          isChildren={false}
        />
      );
    },
  },
  {
    title: 'Assignees',
    dataIndex: 'assignees',
    render: (assignees: IUser[], data: IIssue) => {
      return (
        <SelectMember
          assigness={assignees?.map((e) => e.id) as string[]}
          projectId={data.project_id}
          beforeUpdateValue={(change: any) => {
            return issueService.updateIssueAssign(data.id || '', change);
          }}
        />
      );
    },
  },
  {
    title: 'Label',
    dataIndex: 'labels',
    render(labels: ILabel[], data: IIssue) {
      return (
        <SelectLabels
          projectId={data.project_id}
          labels={labels?.map((e) => e.id) || []}
          beforeUpdateValue={(change) => {
            return issueService.updateIssueLabel(
              change as string[],
              data.id || ''
            );
          }}
        />
      );
    },
  },
  {
    title: 'Start Date',
    width: 200,
    dataIndex: 'start_date',
    render(value: string, item: IIssue) {
      return (
        <DatePickerTable
          defaultDate={value}
          name="Start Date"
          beforeUpdateValue={(e) => {
            return issueService.updateIssue(item.id, {
              start_date: e ? moment(e).format() : (null as any),
            });
          }}
        />
      );
    },
  },
  {
    title: 'Due Date',
    width: 200,
    dataIndex: 'target_date',
    render(value: string, item: IIssue) {
      return (
        <DatePickerTable
          defaultDate={value}
          name="Due Date"
          beforeUpdateValue={(e) => {
            return issueService.updateIssue(item.id, {
              target_date: e ? moment(e).format() : (null as any),
            });
          }}
        />
      );
    },
  },
  {
    title: 'Estimate',
    width: 200,
    dataIndex: 'estimate_point_id',
    render(estimate_point_id: string, item: IIssue) {
      return (
        <SelectEstimate
          estimates={estimate_point_id || ''}
          estimateId={item.project?.estimate_id || ''}
          beforeUpdateValue={(change) => {
            return issueService.updateIssue(item.id, {
              estimate_point_id: change as string,
            });
          }}
        />
      );
    },
  },
  {
    title: 'Created On',
    dataIndex: 'createdAt',
    width: 200,
    render(value: string) {
      return (
        <div className="w-full overflow-hidden text-ellipsis">
          {moment(value).format(DATE_FORMAT)}
        </div>
      );
    },
  },
  {
    title: 'Updated On',
    dataIndex: 'updatedAt',
    render(value: string) {
      return (
        <div className="w-full overflow-hidden text-ellipsis">
          {moment(value).format(DATE_FORMAT)}
        </div>
      );
    },
  },
];
