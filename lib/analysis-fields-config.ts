// lib/analysis-fields-config.ts
export type AnalysisFieldConfig = {
    name: string
    label: string
    placeholder: string
    required: boolean
    rows?: number
  }
  
  export const ANALYSIS_FIELDS_BY_TYPE: Record<string, AnalysisFieldConfig[]> = {
    Technical: [
      {
        name: 'context',
        label: 'Contexte Technique',
        placeholder: 'Contexte du projet, objectifs techniques...',
        required: true,
        rows: 4
      },
      {
        name: 'constraints',
        label: 'Contraintes Techniques *',
        placeholder: 'Contraintes matérielles, logicielles, budgétaires...',
        required: true,
        rows: 4
      },
      {
        name: 'feasibility',
        label: 'Faisabilité *',
        placeholder: 'Analyse de faisabilité technique...',
        required: true,
        rows: 4
      },
      {
        name: 'challenges',
        label: 'Défis Techniques *',
        placeholder: 'Défis techniques identifiés...',
        required: true,
        rows: 4
      },
      {
        name: 'dependencies',
        label: 'Dépendances',
        placeholder: 'Dépendances techniques, librairies, services...',
        required: false,
        rows: 3
      },
      {
        name: 'stack',
        label: 'Stack Technique Recommandée *',
        placeholder: 'Front-end, Back-end, Base de données, DevOps...',
        required: true,
        rows: 5
      },
      {
        name: 'architecture',
        label: 'Architecture *',
        placeholder: 'Type d\'architecture, composants, communication...',
        required: true,
        rows: 5
      },
      {
        name: 'integrations',
        label: 'Intégrations',
        placeholder: 'API tierces, services externes...',
        required: false,
        rows: 3
      },
      {
        name: 'existingIssues',
        label: 'Problèmes Techniques Existants',
        placeholder: 'Bugs, problèmes d\'architecture, dette technique...',
        required: false,
        rows: 4
      },
      {
        name: 'solutions',
        label: 'Solutions Techniques Proposées',
        placeholder: 'Solutions et améliorations recommandées...',
        required: false,
        rows: 4
      }
    ],
    Functional: [
      {
        name: 'context',
        label: 'Contexte / Besoins Client *',
        placeholder: 'Contexte du projet, objectifs, besoins du client...',
        required: true,
        rows: 4
      },
      {
        name: 'objectives',
        label: 'Objectifs Fonctionnels *',
        placeholder: 'Objectifs métier, KPIs attendus...',
        required: true,
        rows: 4
      },
      {
        name: 'mainFeatures',
        label: 'Fonctionnalités Principales *',
        placeholder: 'Liste des fonctionnalités principales...',
        required: true,
        rows: 5
      },
      {
        name: 'useCases',
        label: 'Cas d\'Usage Clés *',
        placeholder: 'Scénarios d\'utilisation, parcours utilisateur...',
        required: true,
        rows: 5
      },
      {
        name: 'userStories',
        label: 'User Stories',
        placeholder: 'En tant que [utilisateur], je veux [action], afin de [bénéfice]...',
        required: false,
        rows: 5
      },
      {
        name: 'businessRules',
        label: 'Règles Métier',
        placeholder: 'Règles de gestion, contraintes fonctionnelles...',
        required: false,
        rows: 4
      },
      {
        name: 'dataModel',
        label: 'Modèle de Données',
        placeholder: 'Entités, relations, attributs principaux...',
        required: false,
        rows: 4
      },
      {
        name: 'workflows',
        label: 'Workflows',
        placeholder: 'Processus métier, flux de travail...',
        required: false,
        rows: 4
      }
    ],
    'UI/UX': [
      {
        name: 'context',
        label: 'Contexte UX *',
        placeholder: 'Contexte utilisateur, cible, objectifs UX...',
        required: true,
        rows: 4
      },
      {
        name: 'userPersonas',
        label: 'Personas Utilisateurs *',
        placeholder: 'Description des profils utilisateurs cibles...',
        required: true,
        rows: 5
      },
      {
        name: 'userJourney',
        label: 'Parcours Utilisateur *',
        placeholder: 'Étapes du parcours, points de contact...',
        required: true,
        rows: 5
      },
      {
        name: 'designPrinciples',
        label: 'Principes de Design *',
        placeholder: 'Principes UX/UI à respecter...',
        required: true,
        rows: 4
      },
      {
        name: 'wireframes',
        label: 'Wireframes / Maquettes',
        placeholder: 'Description des wireframes, liens vers les maquettes...',
        required: false,
        rows: 4
      },
      {
        name: 'designSystem',
        label: 'Design System',
        placeholder: 'Couleurs, typographie, composants, guidelines...',
        required: false,
        rows: 5
      },
      {
        name: 'accessibility',
        label: 'Accessibilité',
        placeholder: 'Standards WCAG, considérations d\'accessibilité...',
        required: false,
        rows: 3
      },
      {
        name: 'interactions',
        label: 'Interactions & Animations',
        placeholder: 'Micro-interactions, transitions, animations...',
        required: false,
        rows: 3
      },
      {
        name: 'responsive',
        label: 'Responsive Design',
        placeholder: 'Breakpoints, comportement mobile/tablet/desktop...',
        required: false,
        rows: 3
      }
    ],
    Performance: [
      {
        name: 'context',
        label: 'Contexte Performance *',
        placeholder: 'Contexte, problèmes de performance identifiés...',
        required: true,
        rows: 4
      },
      {
        name: 'metrics',
        label: 'Métriques Actuelles *',
        placeholder: 'Temps de chargement, temps de réponse, métriques observées...',
        required: true,
        rows: 4
      },
      {
        name: 'objectives',
        label: 'Objectifs de Performance *',
        placeholder: 'Cibles de performance à atteindre...',
        required: true,
        rows: 4
      },
      {
        name: 'bottlenecks',
        label: 'Goulots d\'Étranglement *',
        placeholder: 'Points de blocage identifiés...',
        required: true,
        rows: 4
      },
      {
        name: 'loadTesting',
        label: 'Tests de Charge',
        placeholder: 'Résultats des tests de charge, scénarios testés...',
        required: false,
        rows: 4
      },
      {
        name: 'optimizations',
        label: 'Optimisations Proposées *',
        placeholder: 'Solutions d\'optimisation recommandées...',
        required: true,
        rows: 5
      },
      {
        name: 'caching',
        label: 'Stratégie de Cache',
        placeholder: 'Mise en cache côté serveur, CDN, cache navigateur...',
        required: false,
        rows: 4
      },
      {
        name: 'database',
        label: 'Optimisation Base de Données',
        placeholder: 'Index, requêtes, schéma...',
        required: false,
        rows: 4
      },
      {
        name: 'monitoring',
        label: 'Monitoring',
        placeholder: 'Outils de monitoring, alertes, dashboards...',
        required: false,
        rows: 3
      }
    ]
  }