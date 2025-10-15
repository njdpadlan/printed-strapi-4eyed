import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    aboutBtn: Schema.Attribute.String;
    aboutHeader: Schema.Attribute.String;
    aboutImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    aboutText: Schema.Attribute.Text;
  };
}

export interface FeaturedproductsFeaturedProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredproducts_featured_products';
  info: {
    displayName: 'FeaturedProducts';
  };
  attributes: {
    featuredProductsHeader: Schema.Attribute.String;
    integratedFormBtn: Schema.Attribute.String;
    integratedFormImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedFormText: Schema.Attribute.String;
    linerlessLabelBtn: Schema.Attribute.String;
    linerlessLabelImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlessLabelTitle: Schema.Attribute.String;
    pressureSealBtn: Schema.Attribute.String;
    pressureSealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressureSealTitle: Schema.Attribute.String;
  };
}

export interface FeaturedpromoproductsFeaturedPromoProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredpromoproducts_featured_promo_products';
  info: {
    displayName: 'FeaturedPromoProducts';
  };
  attributes: {
    featuredpromoBtn: Schema.Attribute.String;
    featuredpromoImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featuredpromoTitle: Schema.Attribute.String;
  };
}

export interface FeaturedservicesFeaturedServices
  extends Struct.ComponentSchema {
  collectionName: 'components_featuredservices_featured_services';
  info: {
    displayName: 'FeaturedServices';
  };
  attributes: {
    clientBrandedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    clientBrandedTitle: Schema.Attribute.String;
    featuredServicesHeader: Schema.Attribute.String;
    instantProofingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    instantProofingTitle: Schema.Attribute.String;
    warehouseImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    warehouseTitle: Schema.Attribute.String;
  };
}

export interface HighqualityHighQuality extends Struct.ComponentSchema {
  collectionName: 'components_highquality_high_qualities';
  info: {
    displayName: 'highQuality';
  };
  attributes: {
    highQualityHeader: Schema.Attribute.String;
    highQualityImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    highQualityText: Schema.Attribute.Text;
  };
}

export interface HomeheroHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_homehero_home_heroes';
  info: {
    displayName: 'homeHero';
  };
  attributes: {
    heroBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heroBtn: Schema.Attribute.String;
    heroHeader: Schema.Attribute.String;
    heroText: Schema.Attribute.Text;
  };
}

export interface MoreproductsMoreProducts extends Struct.ComponentSchema {
  collectionName: 'components_moreproducts_more_products';
  info: {
    displayName: 'MoreProducts';
  };
  attributes: {
    chequesImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    chequesTitle: Schema.Attribute.String;
    envelopesImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    envelopesTitle: Schema.Attribute.String;
    formsImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    formsTitle: Schema.Attribute.String;
    labelsmarketingImageGallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    labelsmarketingTitle: Schema.Attribute.String;
    moreproductsHeader: Schema.Attribute.String;
  };
}

export interface OnlinebasedOnlineBased extends Struct.ComponentSchema {
  collectionName: 'components_onlinebased_online_baseds';
  info: {
    displayName: 'OnlineBased';
  };
  attributes: {
    onlineBasedBtn: Schema.Attribute.String;
    onlineBasedHeader: Schema.Attribute.String;
    onlineBasedImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    onlineBasedText: Schema.Attribute.Text;
  };
}

export interface ProductgalleryProductGallery extends Struct.ComponentSchema {
  collectionName: 'components_productgallery_product_galleries';
  info: {
    displayName: 'ProductGallery';
  };
  attributes: {
    productGalleryHeader: Schema.Attribute.String;
    productGalleryImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProductheroProductHero extends Struct.ComponentSchema {
  collectionName: 'components_producthero_product_heroes';
  info: {
    displayName: 'productHero';
  };
  attributes: {
    productHeroHeader: Schema.Attribute.String;
    productHeroText: Schema.Attribute.Text;
  };
}

export interface ProductsfeaturedproductsProductsFeaturedProducts
  extends Struct.ComponentSchema {
  collectionName: 'components_productsfeaturedproducts_products_featured_products';
  info: {
    displayName: 'ProductsFeaturedProducts';
  };
  attributes: {
    featureProductsHeader: Schema.Attribute.String;
    integratedformBtn: Schema.Attribute.String;
    integratedformImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    integratedformTitle: Schema.Attribute.String;
    linerlessBtn: Schema.Attribute.String;
    linerlessImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    linerlessTitle: Schema.Attribute.String;
    pressuresealBtn: Schema.Attribute.String;
    pressuresealImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    pressuresealTitle: Schema.Attribute.String;
  };
}

export interface PromoproductsPromoProducts extends Struct.ComponentSchema {
  collectionName: 'components_promoproducts_promo_products';
  info: {
    displayName: 'PromoProducts';
  };
  attributes: {
    promoProductsBtn: Schema.Attribute.String;
    promoProductsHeader: Schema.Attribute.String;
    promoProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface UniqueproductsUniqueProducts extends Struct.ComponentSchema {
  collectionName: 'components_uniqueproducts_unique_products';
  info: {
    displayName: 'UniqueProducts';
  };
  attributes: {
    uniqueProductsBtn: Schema.Attribute.String;
    uniqueProductsHeader: Schema.Attribute.String;
    uniqueProductsImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    uniqueProductsText: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'featuredproducts.featured-products': FeaturedproductsFeaturedProducts;
      'featuredpromoproducts.featured-promo-products': FeaturedpromoproductsFeaturedPromoProducts;
      'featuredservices.featured-services': FeaturedservicesFeaturedServices;
      'highquality.high-quality': HighqualityHighQuality;
      'homehero.home-hero': HomeheroHomeHero;
      'moreproducts.more-products': MoreproductsMoreProducts;
      'onlinebased.online-based': OnlinebasedOnlineBased;
      'productgallery.product-gallery': ProductgalleryProductGallery;
      'producthero.product-hero': ProductheroProductHero;
      'productsfeaturedproducts.products-featured-products': ProductsfeaturedproductsProductsFeaturedProducts;
      'promoproducts.promo-products': PromoproductsPromoProducts;
      'uniqueproducts.unique-products': UniqueproductsUniqueProducts;
    }
  }
}
