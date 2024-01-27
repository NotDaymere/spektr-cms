import type { Schema, Attribute } from '@strapi/strapi';

export interface UiBenefit extends Schema.Component {
  collectionName: 'components_ui_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'cube';
  };
  attributes: {
    icon: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface UiReview extends Schema.Component {
  collectionName: 'components_ui_reviews';
  info: {
    displayName: 'Review';
    icon: 'discuss';
  };
  attributes: {
    review: Attribute.Text & Attribute.Required;
    reviewer_name: Attribute.String & Attribute.Required;
    reviewer_pisition: Attribute.String & Attribute.Required;
    reviewer_worked_in: Attribute.Media;
    reviewer_image: Attribute.Media & Attribute.Required;
  };
}

export interface UiSocial extends Schema.Component {
  collectionName: 'components_ui_socials';
  info: {
    displayName: 'Social';
    icon: 'twitter';
  };
  attributes: {
    type: Attribute.Enumeration<['LinkedIn', 'Facebook']> & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
  };
}

export interface UiStep extends Schema.Component {
  collectionName: 'components_ui_steps';
  info: {
    displayName: 'Step';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.benefit': UiBenefit;
      'ui.review': UiReview;
      'ui.social': UiSocial;
      'ui.step': UiStep;
    }
  }
}
