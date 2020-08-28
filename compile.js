import fs from 'fs';
import Handlebars from 'handlebars';

const template = Handlebars.compile(fs.readFileSync('./templates/index.hbs').toString());
Handlebars.registerPartial('ability', fs.readFileSync('./templates/partials/ability.hbs').toString());

const abilities = {
  academic: [
    {
      label: 'Anthropology',
      name: 'anthropology',
    },
    {
      label: 'Anthropology',
      name: 'architecture',
    },
    {
      label: 'History (Ancient)',
      name: 'history_ancient',
    },
    {
      label: 'History (Contemporary)',
      name: 'history_contemporary',
    },
    {
      label: 'History (Future)',
      name: 'history_future',
    },
    {
      label: 'Military Tactics',
      name: 'military_tactics',
    },
    {
      label: 'Research',
      name: 'research',
    },
    {
      label: 'Timecraft*',
      name: 'timecraft',
    },
    {
      label: 'Trivia',
      name: 'trivia',
    },
  ],
  interpersonal: [
    {
      label: 'Authority',
      name: 'authority',
    },
    {
      label: 'Bureaucracy',
      name: 'bureaucracy',
    },
    {
      label: 'Charm',
      name: 'charm',
    },
    {
      label: 'Falsehood Detection',
      name: 'falsehood_detection',
    },
    {
      label: 'High Society',
      name: 'high_society',
    },
    {
      label: 'Intimidation',
      name: 'intimidation',
    },
    {
      label: 'Reassurance',
      name: 'reassurance',
    },
    {
      label: 'Streetwise',
      name: 'streetwise',
    },
    {
      label: 'Taunt',
      name: 'taunt',
    },
  ],
  technical: [
    {
      label: 'Forgery',
      name: 'forgery',
    },
    {
      label: 'Hacking',
      name: 'hacking',
    },
    {
      label: 'Medical Expertise',
      name: 'medical_expertise',
    },
    {
      label: 'Notice',
      name: 'notice',
    },
    {
      label: 'Outdoor Survival',
      name: 'outdoor_survival',
    },
    {
      label: 'Paradox Prevention',
      name: 'paradox_prevention',
    },
    {
      label: 'Science!',
      name: 'science',
    },
    {
      label: 'Spying',
      name: 'spying',
    },
  ],
  general: [
    {
      label: 'Athletics',
      name: 'athletics',
      roll: true,
    },
    {
      label: 'Burglary',
      name: 'burglary',
      roll: true,
    },
    {
      label: 'Chronal Stability**',
      name: 'chronal_stability',
      value: 6,
      max: 15,
    },
    {
      label: 'Disguise',
      name: 'disguise',
      roll: true,
    },
    {
      label: 'Health**',
      name: 'health',
      value: 6,
      max: 15,
    },
    {
      label: 'Medic',
      name: 'medic',
      roll: true,
    },
    {
      label: 'Preparedness',
      name: 'preparedness',
      roll: true,
    },
    {
      label: 'Reality Anchor',
      name: 'reality_anchor',
      roll: true,
    },
    {
      label: 'Scuffling',
      name: 'scuffling',
      roll: true,
    },
    {
      label: 'Shooting',
      name: 'shooting',
      roll: true,
    },
    {
      label: 'Tinkering',
      name: 'tinkering',
      roll: true,
    },
    {
      label: 'Unobtrusiveness',
      name: 'unobtrusiveness',
      roll: true,
    },
    {
      label: 'Vehicles',
      name: 'vehicles',
      roll: true,
    },
  ],
};

fs.writeFileSync('index.html', template({ abilities }), { encoding: 'utf8' });

process.exit(0);
